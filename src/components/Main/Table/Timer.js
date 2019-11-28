import React from 'react';
//import NameList from './NameList/NameList.js';

export default class Timer extends React.Component {
  render(){
    return(
      <div id={this.props.id}>00:00</div>
    );
  } 
}
