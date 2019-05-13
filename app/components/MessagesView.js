import React from 'react';

export default class MessagesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="messages">
        <div className="title">Complete the following steps before uploading your first file:</div>
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
