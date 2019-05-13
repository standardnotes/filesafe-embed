import React from 'react';
import FilesafeManager from "../lib/FilesafeManager"

export default class FilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  downloadFile = async (fileDescriptor) => {
    if(this.isMobile) {
      let platform = FilesafeManager.get().filesafe.getPlatform();
      let display = platform == "ios" ? "iOS" : "Android";
      alert(`Downloading files is not currently supported on ${display}.`)
      return;
    }

    let integration = FilesafeManager.get().filesafe.integrationForFileDescriptor(fileDescriptor);
    let name = FilesafeManager.get().filesafe.displayStringForIntegration(integration);
    this.setState({status: `Downloading from ${name}...`});

    return FilesafeManager.get().filesafe.downloadFileFromDescriptor(fileDescriptor).then((item) => {
      this.setState({status: "Decrypting..."});
      return FilesafeManager.get().filesafe.decryptFile({fileDescriptor: fileDescriptor, fileItem: item}).then((data) => {
        FilesafeManager.get().filesafe.downloadBase64Data({
          base64Data: data.decryptedData,
          fileName: fileDescriptor.content.fileName,
          fileType: fileDescriptor.content.fileType
        });
        this.setState({status: null, selectedFile: null});
      }).catch((decryptionError) => {
        console.error("filesafe-embed | error decrypting file:", decryptionError);
        this.flashError("Error decrypting file.");
      })
    }).catch((downloadError) => {
      console.log("Error downloading file", downloadError);
      this.flashError("Error downloading file.");
    })
  }

  selectFile = (event, metadata) => {
    var element = event.target;
    element.focus();
    if(this.state.selectedFile == metadata) {
      this.setState({selectedFile: null})
    } else {
      this.setState({selectedFile: metadata});
    }
  }

  flashError(error) {
    this.setState({status: error, statusClass: "danger"});
    setTimeout(() => {
      this.setState({status: null, statusClass: null});
    }, 2500);
  }

  deleteFile = (fileDescriptor) => {
    FilesafeManager.get().filesafe.deleteFileFromDescriptor(fileDescriptor);
  }

  copyInsertionLink = (fileDescriptor) => {
    let text = `[FileSafe:${fileDescriptor.uuid}:${fileDescriptor.content.fileName}]`;
    FilesafeManager.get().filesafe.copyTextToClipboard(text);
    this.setState({copiedLink: fileDescriptor});
    setTimeout(() => {
      this.setState({copiedLink: null});
    }, 1000);
  }

  isFileSelected = (metadata) => {
    return this.state.selectedFile == metadata;
  }

  get isMobile() {
    return FilesafeManager.get().filesafe.isMobile();
  }

  elementForFile = (file) => {
    const integration = FilesafeManager.get().filesafe.integrationForFileDescriptor(file);
    const integrationName = FilesafeManager.get().filesafe.displayStringForIntegration(integration);
    const path = file.content.serverMetadata.file_path;

    return (
      <div className={"file-item-container " + (this.isFileSelected(file) ? "expanded" : "")}>
        <div onClick={(event) => {this.selectFile(event, file)}} className={"file-item-button sk-button info " + (this.isFileSelected(file) ? "selected" : undefined)}>
          <div className="sk-label">
            {file.content.fileName}
          </div>

          {this.isFileSelected(file) &&
            <div className="file-item-options-wrapper">
              <div onClick={(e) => {e.stopPropagation()}} className={"sk-app-bar file-item-options"}>
                <div className="center">
                  <div onClick={(e) => {e.stopPropagation(); this.downloadFile(file)}} className="sk-app-bar-item">
                    <div className={"sk-label contrast " + (this.isMobile ? "disabled" : "")}>
                      Download
                    </div>
                  </div>

                  <div className="sk-app-bar-item border"></div>

                  <div onClick={(e) => {e.stopPropagation(); this.copyInsertionLink(file)}} className="sk-app-bar-item">
                    <div className="sk-label contrast">
                      {this.state.copiedLink == file ? "Copied" : "Copy Insert Link"}
                    </div>
                  </div>

                  <div className="sk-app-bar-item border"></div>

                  <div onClick={(e) => {e.stopPropagation(); this.deleteFile(file)}} className="sk-app-bar-item">
                    <div className="sk-label contrast">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
              <div className="file-location">
                <strong>{integrationName}</strong>
                <span> {path}</span>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  render() {
    var statusClass = this.state.statusClass ? this.state.statusClass : "info";
    var hasSpinner = statusClass == "info";

    var elements = [];

    if(this.state.status) {
      elements.push((
        <div id="file-download-status" className="sk-horizontal-group">
          {hasSpinner &&
            <div className="sk-spinner info small" />
          }
          <div className={statusClass}>{this.state.status}</div>
        </div>
      ))
    }

    var fileElements = this.props.files.map((file) => {return this.elementForFile(file)});
    if(fileElements.length > 0) {
      elements = elements.concat(fileElements);
    }

    return elements;
  }
}
