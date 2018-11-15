import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.message = 'haha';
  }

  setMessage(a) {
    this.message = a;
  }

  render() {
    return (
      <div>
        <span>{this.message}</span>
      </div>
    );
  }
}

export default Message;