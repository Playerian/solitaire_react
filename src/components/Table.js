import React from 'react';
import Timer from './Table/Timer.js';
import CardShowing from './Table/CardShowing.js';

export default class Table extends React.Component {
  render(){
    return(
      <div id="table">
        < Timer/>
        <button id="start">Let The Game Begin!</button>
        <button id="tb">Takeback</button>
        <p>% of card showing</p>
        < CardShowing/>
      </div>
    );
  } 
}
