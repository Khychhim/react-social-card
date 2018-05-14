import React from 'react';
import ReactDOM from 'react-dom';

class TitleText extends React.Component{
  render() {
    return (
      <div className="">
        <p>
          <b>{this.props.username}</b> <span style={{color: '#A6A4A4'}}>{this.props.id} &#8226; {this.props.date} </span>
        </p>
        <p>{this.props.content}</p>
        <p>{'{ author: '}<span style={{color: '#3F87D9'}}>{this.props.authorId}</span>{' }'}</p>



      </div>
    );
  }
}


export default TitleText;
