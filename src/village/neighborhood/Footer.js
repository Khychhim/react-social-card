import React from 'react';
import ReactDOM from 'react-dom';
import Chat from 'react-icons/lib/md/chat-bubble-outline';
import Share from 'react-icons/lib/md/autorenew';
import Thumb from 'react-icons/lib/md/thumb-up';
import Message from 'react-icons/lib/md/message';
class Footer extends React.Component{
  render() {
    return (
      <div className="footerframe">
        <p>
          <Chat size={25}/> {this.props.message}
        </p>
        <p>
          <Share size={25} color="green"/> <span style={{color: 'green'}}>{this.props.share}</span>
        </p>
        <p>
          <Thumb size={25} color="blue"/> <span style={{color: 'blue'}}>{this.props.like}</span>
        </p>
        <p>
          <Message size={25}/> 2
        </p>
      </div>
    );
  }
}

export default Footer;
