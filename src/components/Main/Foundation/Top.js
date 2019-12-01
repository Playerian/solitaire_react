import React from 'react';

export default class Top extends React.Component {
  handleClick(){
    this.props.getVar("topClicked")(this.props.id[1]);
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
      <div id={this.props.id} className={this.props.className} onClick={() => this.handleClick()}>
        {this.props.data}
      </div>
    );
  } 
}