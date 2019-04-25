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
        FilesafeManager.get().filesafe.downloadBase64Data(data.decryptedData, metadata.content.fileName, metadata.content.fileType);
        this.setState({status: null, selectedFile: null});
      }).catch((decryptionError) => {
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

  isFileSelected = (metadata) => {
    return this.state.selectedFile == metadata;
  }

  elementForFile = (file) => {
    return (
      <div className="sk-segmented-buttons">
        <div onClick={(event) => {this.selectFile(event, file)}} className={"file sk-button info " + (this.isFileSelected(file) ? "selected border-color" : undefined)}>
          <div className="sk-label">
            {file.content.fileName}
          </div>
        </div>

        {this.isFileSelected(file) &&
          [
            <div onClick={() => {this.downloadFile(file)}} className="sk-button info no-border">
              <div className="sk-label">Download</div>
            </div>,

            <div onClick={() => {this.deleteFile(file)}} className="sk-button danger no-border">
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
