import React from 'react';

export default class Card extends React.Component {
  render(){
    let getVar = this.props.getVar;
    let setVar = this.props.setVar;
    let running = getVar("beginned");
    return(
      <img id={this.props.id} className={this.props.className} src={this.props.src} style={this.props.style}>

      </img>
    );
  } 
}