import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "haha"
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.message !== this.props.message)
  }


  render() {
    return (
      <div>
        <span>{this.state.message}</span>
      </div>
    );
  }
}

export default Message;