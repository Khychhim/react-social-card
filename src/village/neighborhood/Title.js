import React from 'react';
import ReactDOM from 'react-dom';
import TitleIcon from './block/TitleIcon';
import TitleText from './block/TitleText';

class Title extends React.Component{

  render() {
    var icon = "/image/"+this.props.icon;
    return (
      <div className="title">
        <TitleIcon icon={this.props.icon}/>
        <TitleText username={this.props.username} id={this.props.id}
          date={this.props.date} content={this.props.content} authorId={this.props.authorId}/>
      </div>
    );
  }
}

export default Title;
