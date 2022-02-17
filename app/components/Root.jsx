import React from 'react';
import KeysView from "./KeysView";
import UploadFilesView from "./UploadFilesView.js";
import AllFilesView from "./AllFilesView";
import IntegrationsView from "./IntegrationsView";
import FilesafeManager from "../lib/FilesafeManager"

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasLegacyAccess: false
    };

    FilesafeManager.get().addDataChangeObserver(() => {
      this.reload();
    });

    this.reload();
  }

  reload() {
    this.setState({
      hasLegacyAccess: FilesafeManager.get().filesafe.hasLegacyAccess()
    });
  }

  render() {
    const { hasLegacyAccess } = this.state;

    if (!hasLegacyAccess) {
      return (
        <div id="home" className={"sk-panel static"}>
          <div id="main-content" className="sk-panel-content">
            <div className="sk-panel-section">
              <div className="sk-notification danger">
                <div className="sk-notification-title">Deprecated</div>
                <div className="sk-notification-text">
                  <p className="sk-p">FileSafe is deprecated and no longer offered to new users as of February 9th, 2022.</p>
                  <p className="sk-p">Existing users who have the extension installed, will continue to have access to it indefinitely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="home" className={"sk-panel static"}>
        <div id="main-content" className="sk-panel-content">

          <div className="sk-panel-section">
            <UploadFilesView/>
          </div>

          <div className="sk-panel-section">
            <IntegrationsView/>
          </div>

          <div className="sk-panel-section">
            <KeysView/>
          </div>

          <div className="sk-panel-section">
            <AllFilesView/>
          </div>

        </div>
      </div>
    );
  }

}
