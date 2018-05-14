import React from 'react';
import ReactDOM from 'react-dom';

class Body extends React.Component{
  render() {
    var imageURL = "/image/" + this.props.imgName;
    return (
      <div className="bodyframe">
        <a href="https://www.iii.com/" target="_blank">
          <img src={imageURL}/>
          <p><b>{this.props.title}</b></p>
          <p>{this.props.content}</p>
          <p><span style={{color: '#A6A4A4'}}>{this.props.link}</span></p>
        </a>
      </div>
    );
  }
}

export default Body;
