import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import FilesafeManager from "./lib/FilesafeManager"

export default class FilesafeEmbed extends React.Component {

  static renderInElement(element, filesafe) {
    FilesafeManager.get().setFilesafeInstance(filesafe);
    ReactDOM.render(React.createElement(FilesafeEmbed), element);
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
