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
    let CardComponent = this.props.cardComponent;
    let data = this.props.data;
    if (data){
      return(
        <div id={this.props.id} className={this.props.className} onClick={(e) => this.handleClick(e)}>
          {data}
        </div>
      );
    }else{
      return(
        <div id={this.props.id} className={this.props.className} onClick={(e) => this.handleClick(e)}>

        </div>
      );
    }
  } 
}