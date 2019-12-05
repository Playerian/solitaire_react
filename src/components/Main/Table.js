import React from 'react';
import Timer from './Table/Timer.js';
import CardShowing from './Table/CardShowing.js';
import StartGame from './Table/startGame.js';
import TakeBack from './Table/TakeBack.js';

export default class Table extends React.Component {
  render(){
    return(
      <div id="table">
        < Timer id="timer" time={this.props.getVar("time")}/>
        < StartGame id="start" setVar={(index, value) => this.props.setVar(index, value)} getVar={(index) => this.props.getVar(index)}/>
        < TakeBack id="tb" getVar={(index) => this.props.getVar(index)} />
        <p>% of card showing</p>
        < CardShowing setVar={(index, value) => this.props.setVar(index, value)} getVar={(index) => this.props.getVar(index)}/>
      </div>
    );
  } 
}
