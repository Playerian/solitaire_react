import React from 'react';

export default class Card extends React.Component {
  handleClick(){
    this.props.getVar("cardClicked")(this.props.id.name);
  }
  render(){
    return(
      <img id={this.props.id.name} className={this.props.className} src={this.props.src} style={this.props.style} row={this.props.row} column={this.props.column} onClick={() => this.handleClick()}>

      </img>
    ); 
  } 
}