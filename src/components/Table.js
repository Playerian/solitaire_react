import React from 'react';
import Timer from './Table/Timer.js';
import CardShowing from './Table/CardShowing.js';
import StartGame from './Table/startGame.js';

export default class Table extends React.Component {
  render(){
    return(
      <div id="table">
        < Timer/>
        < StartGame/>
        <button id="tb">Takeback</button>
        <p>% of card showing</p>
        < CardShowing/>
      </div>
    );
  } 
}
