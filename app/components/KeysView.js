import React from 'react';
import FilesafeManager from "../lib/FilesafeManager"

export default class KeysView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {credentials: FilesafeManager.get().filesafe.getAllCredentials() || []};

    FilesafeManager.get().addDataChangeObserver(() => {
      this.setState({credentials: FilesafeManager.get().filesafe.getAllCredentials()});
    })
  }

  exportCredential = (credential) => {
    var base64Data = btoa(JSON.stringify(credential, null, 2));
    FilesafeManager.get().filesafe.downloadBase64Data({base64Data, fileName: `sn-filesafe-keys-${credential.created_at.toISOString()}.json`, fileType: 'text/json'});
  }

  deleteCredential = (credential) => {
    if(this.numFilesForCredential(credential) != 0) {
      alert("This key has files encrypted with it and cannot be deleted. First delete any associated files, then try again.");
      return;
    }

    FilesafeManager.get().filesafe.deleteCredential(credential);
  }

  createNewKeys = () => {
    FilesafeManager.get().filesafe.createNewCredentials();
  }

  labelForCredential = (credential) => {
    return credential.created_at.toLocaleString();
  }

  numFilesForCredential = (credential) => {
    return FilesafeManager.get().filesafe.numberOfFilesEncryptedWithCredential(credential);
  }

  setCredentialAsDefault = (credential) => {
    FilesafeManager.get().filesafe.setCredentialAsDefault(credential);
  }

  render() {
    return (
      <div>
        <div className="sk-panel-row">
          <div className="sk-horizontal-group">
            <div className="sk-circle info small"></div>
            <div className="sk-h2 sk-bold">Keys</div>
          </div>
          <div className="sk-button info no-border" onClick={this.createNewKeys}>
            <div className="sk-label">Create New</div>
          </div>
        </div>

        <div className="list-container">
          {this.state.credentials.map((credential) =>
            <div className="sk-horizontal-group">
              <div className={"sk-circle x-small " + (credential.content.isDefault ? "success" : "sk-secondary-contrast")}>
              </div>

              <div>
                <div className="sk-panel-row">
                  {this.labelForCredential(credential)}
                </div>

                <div className="sk-panel-row">
                  {this.numFilesForCredential(credential)} encrypted files
                </div>

                <div className="sk-horizontal-group">
                  {this.state.credentials.length > 1 && !credential.content.isDefault &&
                    <a className="info" onClick={() => {this.setCredentialAsDefault(credential)}}>Make Default</a>
                  }
                  <a className="info" onClick={() => {this.exportCredential(credential)}}>Export</a>
                  <a className="danger" onClick={() => {this.deleteCredential(credential)}}>Delete</a>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
