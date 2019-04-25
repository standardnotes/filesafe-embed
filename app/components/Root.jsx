import React from 'react';
import KeysView from "./KeysView";
import UploadFilesView from "./UploadFilesView.js";
import AllFilesView from "./AllFilesView";
import IntegrationsView from "./IntegrationsView";
import FilesafeManager from "../lib/FilesafeManager"

export default class Root extends React.Component {

  constructor(props) {
    super(props);

    this.state = {messages: []};

    FilesafeManager.get().filesafe.addDataChangeObserver(() => {
      let platform = FilesafeManager.get().filesafe.getPlatform();
      if(this.state.platform != platform) {
        this.setState({platform: platform});
        this.applyPlatformClass();
      }
    })
  }

  applyPlatformClass() {
    document.querySelector("html").classList.add(this.state.platform);
    this.reloadScrollBars();
  }

  reloadScrollBars() {
    // For some reason, scrollbars don't update when the className for this.state.platform is set dynamically.
    // We're doing everything right, but on Chrome Windows, the scrollbars don't reload if adding className after
    // the page already loaded. So this seems to work in manually reloading.
    var container = document.querySelector("body");
    container.style.display = "none";
    setTimeout(() => {
      container.style.display = "block";
    }, 0);
  }

  render() {
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
    )
  }

}
