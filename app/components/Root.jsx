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
