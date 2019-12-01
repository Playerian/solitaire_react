import React from 'react';

export default class Bottom extends React.Component {
  handleClick(){
    this.props.getVar("bottomClicked")(this.props.id[1]);
  }
  render(){
    let CardComponent = this.props.cardComponent;
    //list of cards to append
    let dataList = this.props.data;
    if (dataList){
      return(
        <div id={this.props.id} className={this.props.className} onClick={() => this.handleClick()}>
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