import React from 'react';

export default class Bottom extends React.Component {
  render(){
    let CardComponent = this.props.cardComponent;
    //list of cards to append
    let dataList = this.props.data;
    if (dataList){
      let cardList = [];
      for (let i = 0; i < dataList.length; i ++){
        let data = dataList[i];
        cardList.push(data);
      }
      return(
        <div id={this.props.id} className={this.props.className}>
          {cardList}
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