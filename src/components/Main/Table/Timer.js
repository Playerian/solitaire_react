import React from 'react';
//import NameList from './NameList/NameList.js';

export default class Timer extends React.Component {
  render(){
    var second = this.props.time;
    var minute = 0;
    while (second >= 60) {
        second -= 60;
        minute++;
    }
    minute = minute.toString(10);
    second = second.toString(10);
    while (minute.length < 2) {
        minute = "0" + minute;
    }

    while (second.length < 2) {
        second = "0" + second;
    }
    return(
      <div id={this.props.id}>{minute}:{second}</div>
    );
  } 
}
