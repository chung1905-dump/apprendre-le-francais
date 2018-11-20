import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    };
  }

  render() {
    return (
      <div>
        <span className="text-danger">{this.state.message}</span>
      </div>
    );
  }
}

export default Message;