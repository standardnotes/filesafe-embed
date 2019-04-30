import React from 'react';

export default class MessagesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="messages">
        <strong>Before uploading a file, you must:</strong>
        <ul>
          {this.props.messages.map((message) =>
            <li dangerouslySetInnerHTML={{__html: message.message}} className={message.css}>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
