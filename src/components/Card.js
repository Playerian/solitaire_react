import React from 'react';

export default class Card extends React.Component {
  render(){
    return(
    <img id={this.props.id} className={this.props.className} src={this.props.src} style={this.props.style} row={this.props.row} column={this.props.column}>

    </img>);
  } 
}