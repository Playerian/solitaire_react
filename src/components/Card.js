import React from 'react';

export default class Card extends React.Component {
  handleClick(){
    this.props.getVar("cardClicked")(this.props.id.name);
  }
  onDragStart(event){
    event.dataTransfer.setData("data", this.props.id.name);
    //this.props.getVar("cardClicked")(this.props.id.name, true);
  }
  allowDrop(event){
    event.preventDefault();
  }
  onDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("data");
    if (data){
      this.props.getVar("cardClicked")(data, true);
      this.props.getVar("cardClicked")(this.props.id.name);
    }
  }
  render(){
    return(
      <img draggable="true" onDragStart={(e) => this.onDragStart(e)} onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.onDrop(e)} id={this.props.id.name} className={this.props.className} src={this.props.src} style={this.props.style} row={this.props.row} column={this.props.column} onClick={() => this.handleClick()}>

      </img>
    ); 
  } 
}