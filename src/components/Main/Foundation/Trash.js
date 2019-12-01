import React from 'react';

export default class Trash extends React.Component {
  handleClick(e){
    let getVar = this.props.getVar;
    let setVar = this.props.setVar;
    let running = getVar("beginned");
    if (running){
      getVar("trashClicked")();
    }
  }
  render(){
    let cardComponent = this.props.cardComponent;
    return(
      <div id={this.props.id} className={this.props.className} onClick={(e) => this.handleClick(e)}>

      </div>
    );
  } 
}