import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import FilesafeManager from "./lib/FilesafeManager"

export class FilesafeEmbed extends React.Component {

  // Called by consumer
  static renderInElement(element, filesafe, delegate) {
    FilesafeManager.get().setFilesafeInstance(filesafe);
    FilesafeManager.get().setDelegate(delegate);
    ReactDOM.render(React.createElement(FilesafeEmbed), element);
  }

  // Called by consumer. Required if embed will appear and disappear multiple times
  // This function will clean up window observers
  static unload(element) {
    FilesafeManager.get().unload();
    ReactDOM.unmountComponentAtNode(element);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="filesafe-embed">
        <div className="sn-component">
          <Root/>
        </div>
      </div>
    );
  }
}
