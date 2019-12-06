import React from 'react';

export default class Bottom extends React.Component {
  handleClick(){
    this.props.getVar("bottomClicked")(this.props.id[1]);
  }
  allowDrop(event){
    event.preventDefault();
  }
  onDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("data");
    if (data){
      if (this.props.getVar("columnHeight")(parseInt(this.props.id[1])) === 0){
        this.props.getVar("cardClicked")(data, true);
        this.props.getVar("bottomClicked")(this.props.id[1]);
      }
    }
  }
  render(){
    let CardComponent = this.props.cardComponent;
    //list of cards to append
    let dataList = this.props.data;
    if (dataList){
      return(
        <div onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.onDrop(e)} id={this.props.id} className={this.props.className} onClick={() => this.handleClick()}>
          {dataList}
        </div>
      );
    }else{
      return (
      <div id={this.props.id} className={this.props.className}>

      </div>
      );
    }
  } 
}