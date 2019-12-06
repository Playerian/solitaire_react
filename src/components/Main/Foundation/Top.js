import React from 'react';

export default class Top extends React.Component {
  handleClick(){
    this.props.getVar("topClicked")(this.props.id[1]);
  }
  onDragStart(event){
    let found = this.props.getVar("found")["f" + this.props.id[1]];
    if (found.length > 0){
      event.dataTransfer.setData("data", found[found.length - 1].name);
    }
  }
  allowDrop(event){
    event.preventDefault();
  }
  onDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("data");
    if (data){
      this.props.getVar("cardClicked")(data, true);
      this.props.getVar("topClicked")(this.props.id[1]);
    }
  }
  render(){
    if (this.props.id === "useless" || !(this.props.data)){
      return(
        <div id={this.props.id} className={this.props.className}>
        
        </div>
      )
    }
    let cardComponent = this.props.cardComponent;
    let getVar = this.props.getVar;
    let setVar = this.props.setVar;
    let running = getVar("beginned");
    return(
      <div draggable="true" onDragStart={(e) => this.onDragStart(e)} onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.onDrop(e)} id={this.props.id} className={this.props.className} onClick={() => this.handleClick()}>
        {this.props.data}
      </div>
    );
  } 
}