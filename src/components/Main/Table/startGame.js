import React from 'react';
//import NameList from './NameList/NameList.js';

export default class StartGame extends React.Component {
  handleClick(){
    this.props.getVar("init")();
  }
  render(){
    return(
      <button id={this.props.id} onClick={(e) => this.handleClick()}>Let The Game Begin!</button>
    );
  } 
}
