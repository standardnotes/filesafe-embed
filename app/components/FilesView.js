import React from 'react';
import FilesafeManager from "../lib/FilesafeManager"

export default class FilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  downloadFile = async (fileDescriptor) => {
    this.setState({status: "Downloading..."});

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

  elementForFile = (file) => {
    return (
      <div className={"sk-segmented-buttons " + (this.isFileSelected(file) ? "expanded" : null)}>
        <div onClick={(event) => {this.selectFile(event, file)}} className={"file sk-button info " + (this.isFileSelected(file) ? "selected" : undefined)}>
          <div className="sk-label">
            {file.content.fileName}
          </div>
        </div>

        {this.isFileSelected(file) &&
          [
            <div onClick={() => {this.downloadFile(file)}} className="sk-button info">
              <div className="sk-label">Download</div>
            </div>,

            <div onClick={() => {this.copyInsertionLink(file)}} className="sk-button info">
              <div className="sk-label">{this.state.copiedLink == file ? "Copied" : "Copy Insert Link"}</div>
            </div>,

            <div onClick={() => {this.deleteFile(file)}} className="sk-button danger">
              <div className="sk-label">Delete</div>
            </div>
          ]
        }
      </div>
    )
  }

  render() {
    var statusClass = this.state.statusClass ? this.state.statusClass : "info";
    var hasSpinner = statusClass == "info";

    var elements = [];

    if(this.state.status) {
      elements.push((
        <div id="file-status" className="sk-horizontal-group">
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
