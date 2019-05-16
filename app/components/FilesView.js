import React from 'react';
import FilesafeManager from "../lib/FilesafeManager"

export default class FilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.delegate = FilesafeManager.get().getDelegate();
  }

  get supportsPreviews() {
    if(this._supportsPreview !== undefined) {
      return this._supportsPreview;
    }
    
    let env = FilesafeManager.get().filesafe.getEnvironment();
    // May be undefined if bridge hasn't been established yet.
    if(env == undefined) {
      return false;
    }

    // Only the web app supports previews, as temporary object urls are created for previews,
    // and temp urls only live in the same browser scope as client. In desktop, the electron scope
    // is different from the the browser scope, and on mobile, the web view scope will be different than
    // the user's browser. On web, since we open the preview in the same browser, it will work.
    this._supportsPreview = env == "web";
  }

  setStatusForFile = (file, status, hasSpinner) => {
    this.setState({fileStatusFile: file, fileStatus: status, hasStatusSpinner: hasSpinner});
  }

  decryptFile = async (fileDescriptor) => {
    let integration = FilesafeManager.get().filesafe.integrationForFileDescriptor(fileDescriptor);
    let name = FilesafeManager.get().filesafe.displayStringForIntegration(integration);
    this.setStatusForFile(fileDescriptor, `Downloading from ${name}...`, true);

    return FilesafeManager.get().filesafe.downloadFileFromDescriptor(fileDescriptor).then((item) => {
      this.setStatusForFile(fileDescriptor, "Decrypting...", true);
      return FilesafeManager.get().filesafe.decryptFile({fileDescriptor: fileDescriptor, fileItem: item}).then((data) => {
        return {
          base64Data: data.decryptedData,
          fileName: fileDescriptor.content.fileName,
          fileType: fileDescriptor.content.fileType
        };
      }).catch((decryptionError) => {
        console.error("filesafe-embed | error decrypting file:", decryptionError);
        this.flashError("Error decrypting file.");
      })
    }).catch((downloadError) => {
      console.log("Error downloading file", downloadError);
      this.flashError("Error downloading file.");
    })
  }

  downloadFile = async (fileDescriptor) => {
    if(this.isMobile) {
      let platform = FilesafeManager.get().filesafe.getPlatform();
      let display = platform == "ios" ? "iOS" : "Android";
      alert(`Downloading files is not currently supported on ${display}.`)
      return;
    }

    let fileData = await this.decryptFile(fileDescriptor);
    FilesafeManager.get().filesafe.downloadBase64Data(fileData);
    this.setStatusForFile(fileDescriptor, null);
  }

  previewFile = async (fileDescriptor) => {
    // Only supported on web, and not mobile or desktop. Preview button is not rendered on those platforms.
    let fileData = await this.decryptFile(fileDescriptor);
    let url = FilesafeManager.get().filesafe.createTemporaryFileUrl({base64Data: fileData.base64Data, dataType: fileData.fileType});
    this.setStatusForFile(fileDescriptor, null);
    this.setState({previewUrl: url, previewingFile: fileDescriptor});
  }

  onClickPreview = () => {
    // We'll try revoking here in a timeout, but in browsers, since it opens in another tab, this code may not execute.
    // In that case, we'll revoke again when the current file is collapsed or another is selected.
    // Actually I've found that with a timeout of 100, it doesn't execute, but if you increase to 250-500, it does.
    setTimeout(() => {
      this.revokePreview();
    }, 500)
  }

  selectFile = (event, metadata) => {
    var element = event.target;
    element.focus();
    if(this.state.selectedFile == metadata) {
      this.setState({selectedFile: null})
      this.delegate.onSelectFile && this.delegate.onSelectFile(null);
    } else {
      this.setState({selectedFile: metadata});
      this.delegate.onSelectFile && this.delegate.onSelectFile(metadata);
    }

    // We want to release previews after another file is selected or when the current file is collapsed.
    this.revokePreview();
  }

  revokePreview() {
    if(this.state.previewUrl) {
      FilesafeManager.get().filesafe.revokeTempUrl(this.state.previewUrl);
    }
    this.setState({previewUrl: null, previewingFile: null});
  }

  flashError(error) {
    this.setStatusForFile(error, false);
    setTimeout(() => {
      this.setStatusForFile(null);
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

    let previewReady = this.state.previewUrl && this.state.previewingFile == file;
    // We should make Files their own component and have their own state but for now we're doing it this way.
    let hasStatus = this.state.fileStatusFile == file && this.state.fileStatus;
    let hasSpinner = this.state.hasStatusSpinner;

    return (
      <div className={"file-item-container " + (this.isFileSelected(file) ? "expanded" : "")}>
        <div onClick={(event) => {this.selectFile(event, file)}} className={"file-item-button sk-button info " + (this.isFileSelected(file) ? "selected" : undefined)}>

          <div className="sk-label">
            {file.content.fileName}
          </div>

          {hasStatus &&
            <div className="file-download-status sk-horizontal-group">
              {hasSpinner &&
                <div className="sk-spinner x-small" />
              }
              <div className={"file-status-label"}>{this.state.fileStatus}</div>
           </div>
          }

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
                  
                  {this.supportsPreviews && previewReady && 
                    <a className="sk-app-bar-item" href={this.state.previewUrl} onClick={(e) => {e.stopPropagation(); this.onClickPreview()}} target="_blank">
                      <div className={"sk-label contrast"}>
                        Open Preview
                      </div>
                    </a>
                  }

                  {this.supportsPreviews && !previewReady && 
                    <div onClick={(e) => {e.stopPropagation(); this.previewFile(file)}} className="sk-app-bar-item">
                      <div className={"sk-label contrast " + (this.isMobile ? "disabled" : "")}>
                        Preview
                      </div>
                    </div>                    
                  }

                  {this.supportsPreviews &&
                    <div className="sk-app-bar-item border"></div>
                  }

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
    return this.props.files.map((file) => {return this.elementForFile(file)});
  }
}
