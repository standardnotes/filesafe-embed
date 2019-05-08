import React from 'react';
import FilesView from "./FilesView";
import FilesafeManager from "../lib/FilesafeManager"

export default class AllFilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {expanded: false, files: FilesafeManager.get().filesafe.getAllFileDescriptors() || []};

    FilesafeManager.get().addDataChangeObserver(() => {
      this.setState({files: FilesafeManager.get().filesafe.getAllFileDescriptors()})
    });
  }

  toggleVisibility = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <div className="files-view">
        <div className="sk-panel-row justify-left">
          <div className="sk-horizontal-group">
            <div className="sk-panel-section-title">All Files ({this.state.files.length})</div>
            <a className="info" onClick={this.toggleVisibility}>{this.state.expanded ? "Hide" : "Show"}</a>
          </div>
        </div>

        {this.state.expanded &&
          <div className="sk-panel-row">
            <div className="files">
              <FilesView files={this.state.files}/>
            </div>
          </div>
        }

      </div>
    )
  }
}
