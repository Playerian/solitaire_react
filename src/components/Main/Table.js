import React from 'react';
import Timer from './Table/Timer.js';
import CardShowing from './Table/CardShowing.js';
import StartGame from './Table/startGame.js';
import TakeBack from './Table/TakeBack.js';

export default class Table extends React.Component {
  render(){
    return(
      <div id="table">
        < Timer id="timer"/>
        < StartGame id="start"/>
        < TakeBack id="tb"/>
        <p>% of card showing</p>
        < CardShowing/>
      </div>
    );
  } 
}
