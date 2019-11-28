import React from 'react';
//import NameList from './NameList/NameList.js';

export default class StartGame extends React.Component {
  render(){
    return(
      <button id={this.props.id}>Let The Game Begin!</button>
    );
  } 
}
