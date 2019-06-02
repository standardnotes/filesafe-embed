import React from 'react';
import MessagesManager from "../lib/MessagesManager";
import MessagesView from "./MessagesView.js";
import FilesView from "./FilesView"
import FilesafeManager from "../lib/FilesafeManager"

export default class UploadFilesView extends React.Component {

  constructor(props) {
    super(props);

    this.messagesManager = new MessagesManager({
      credentialManager: FilesafeManager.get().filesafe.credentialManager,
      integrationManager: FilesafeManager.get().filesafe.integrationManager
    });

    this.messagesManager.getMessages().then((messages) => {
      this.setState({messages: messages});
    });

    this.state = {
      noteFiles: FilesafeManager.get().filesafe.fileDescriptorsForCurrentNote(),
      messages: [],
    };

    FilesafeManager.get().addDataChangeObserver(() => {
      this.reload();
    });

    FilesafeManager.get().addUnloadHandler(() => {
      window.removeEventListener('dragenter', this.event_highlight, false)
      window.removeEventListener('dragover', this.event_highlight, false)
      window.removeEventListener('dragleave', this.event_unhighlight, false)
      window.removeEventListener('drop', this.event_drop, false)
    })
  }

  async reload() {
    var messages = await this.messagesManager.getMessages();
    this.setState({
      noteFiles: FilesafeManager.get().filesafe.fileDescriptorsForCurrentNote(),
      messages: messages
    });
  }

  componentDidMount() {
    this.configureFileForm();

    window.addEventListener('dragenter', this.event_highlight, false)
    window.addEventListener('dragover', this.event_highlight, false)
    window.addEventListener('dragleave', this.event_unhighlight, false)
    window.addEventListener('drop', this.event_drop, false)
  }

  event_preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  event_highlight = (e) => {
    this.event_preventDefaults(e);
    this.rootElement.classList.add('highlight');
  }

  event_unhighlight = (e) => {
    this.event_preventDefaults(e);
    this.rootElement.classList.remove('highlight');
  }

  event_drop = (e) => {
    this.event_unhighlight(e);
    this.event_preventDefaults(e);
    let dt = e.dataTransfer;
    let files = dt.files;
    this.handleDroppedFiles(files)
  }

  get rootElement() {
    return document.getElementById("filesafe-embed");
  }

  get dropContainer() {
    return document.getElementById("files-view");
  }

  get fileInput() {
    return document.getElementById("file-input");
  }

  configureFileForm() {
    var fileInput = this.fileInput;
    var dropContainer = this.dropContainer;
    if(!fileInput) {
      return;
    }

    fileInput.onchange = (event) => {
      // On firefox, this event doesnt get triggered. INstead we handle it on window.addEventListener("drop")
      // Which gets called on all browsers
      let files = event.target.files;
      if(!this.handledFiles) {
        this.handleDroppedFiles(files);
      }
    };
  }

  reset() {
    this.setState({rawData: null, decryptedItems: null, requestPassword: false});
  }

  async readFile(file) {
    const MegabyteLimit = 50;
    const BytesInMegabyte = 1000000; // 50mb
    const ByteLimit = MegabyteLimit * BytesInMegabyte;

    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let decrypt = false;

      reader.onload = async (e) => {
        var data = e.target.result;
        if(decrypt) {
          data = JSON.parse(data);
          var item = data.items[0];
          this.decryptDraggedFile(item).then(resolve);
        } else {
          var arrayBuffer = data;
          var bytes = arrayBuffer.byteLength;
          if(bytes > ByteLimit) {
            alert(`The maximum upload size is ${MegabyteLimit} megabytes per file.`);
            this.setState({status: null});
            resolve();
            return;
          }
          var string = await SFJS.crypto.arrayBufferToBase64(arrayBuffer);
          await this.encryptFile(string, file.name, file.type);
          resolve();
        }
      }

      this.setState({status: "Reading file..."});

      if(file.name.endsWith(".sf") || file.name.endsWith(".json")) {
        decrypt = true;
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    })
  }

  handleDroppedFiles = async (files) => {
    if(FilesafeManager.get().filesafe.getAllIntegrations().length == 0) {
      alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
      return;
    }

    for(let file of files) {
      if(!file) {
        // Can be the case if you're dragging some text or something
        continue;
      }

      await this.readFile(file);
    }

    setTimeout(() => {
      this.setState({status: null});
    }, 2000);
  }

  async decryptDraggedFile(fileDescriptor) {
    this.setState({status: "Decrypting..."});

    const credentials = FilesafeManager.get().filesafe.getAllCredentials();

    let decryptWithCredential = async (credential) => {
      return new Promise((resolve, reject) => {
        FilesafeManager.get().filesafe.decryptFile({fileDescriptor, credential}).then((data) => {
          const item = data.decryptedItem;
          FilesafeManager.get().filesafe.downloadBase64Data({base64Data: data.decryptedData, fileName: item.content.fileName, fileType: item.content.fileType});
          this.setState({status: null});
          resolve(true);
        }).catch((decryptionError) => {
          console.error("Error decrypting:", decryptionError);
          this.flashError("Error decrypting file.");
          reject(false);
        })
      })
    }

    // Try all credentials until one succeeds
    for(let credential of credentials) {
      let success = await decryptWithCredential(credential);
      if(success) {
        return;
      }
    }
  }

  async wait(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, seconds * 1000.0);
    })
  }

  async encryptFile(data, inputFileName, fileType) {
    this.setState({status: "Encrypting..."});

    const credential = FilesafeManager.get().filesafe.getDefaultCredentials();
    if(!credential) {
      alert("Please set up at least one key before attempting to upload a file. To do this, press Expand, and select Create New in the Keys section.");
      return;
    }

    const integration = FilesafeManager.get().filesafe.getDefaultIntegration();
    if(!integration) {
      alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
      return;
    }

    return FilesafeManager.get().filesafe.encryptFile({data, inputFileName, fileType, credential}).then(async (fileItem) => {
      this.setState({status: `Uploading to ${FilesafeManager.get().filesafe.displayStringForIntegration(integration)}...`});
      await this.wait(0.5);

      return FilesafeManager.get().filesafe.uploadFile({fileItem, inputFileName, fileType, credential}).then(() => {
        this.setState({status: "Upload Success."});
      }).catch((uploadError) => {
        console.error("fs-embed | error uploading file:", uploadError);
        this.flashError("Error uploading file.");
      })
    })
  }

  flashError(error) {
    this.setState({status: error, statusClass: "danger"});
    setTimeout(() => {
      this.setState({status: null, statusClass: null});
    }, 2500);
  }

  render() {
    var statusClass = this.state.statusClass ? this.state.statusClass : "info";
    var hasSpinner = statusClass == "info";

    return (
      <div className="sn-component files-view">

        <div className="sk-panel-row align-top">

          <div className="files">

            {this.state.messages.length > 0 &&
              <div id="messages-container" className="sk-panel-section">
                <MessagesView messages={this.state.messages}/>
              </div>
            }

            {this.state.status &&
              <div id="file-upload-status" className="sk-horizontal-group">
                {hasSpinner &&
                  <div className="sk-spinner info small" />
                }
                <div className={statusClass}>{this.state.status}</div>
              </div>
            }
            <div id="add-file-button-container">
              <div className="file sk-button info">
                <label className="no-style">
                  <input type="file" style={{display: "none"}} onChange={(event) => {this.handleDroppedFiles(event.target.files)}} />
                  <div id="attach-file-button-label" className="sk-label">Attach File</div>
                </label>
              </div>
            </div>

            <FilesView files={this.state.noteFiles} />
          </div>
        </div>
      </div>
    )
  }
}
