import React from 'react';
import ReactDOM from 'react-dom';

class TitleIcon extends React.Component{
  render() {
    var icon = "/image/"+this.props.icon;

    return (
      <div>
        <img src={icon}/>
      </div>
    );
  }
}

export default TitleIcon;
