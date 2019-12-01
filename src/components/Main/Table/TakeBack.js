import React from 'react';
//import NameList from './NameList/NameList.js';

export default class TakeBack extends React.Component {
  handleClick(){
    this.props.getVar("takeBack")();
  }
  render(){
    return(
      <button id={this.props.id} onClick={() => this.handleClick()}>Takeback</button>
    );
  } 
}
