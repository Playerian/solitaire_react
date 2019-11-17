import React from 'react';
import Timer from './Timer.js';

export default class Table extends React.Component {
  render(){
    return(
      <div id="table">
        < Timer/>
        <button id="start">Let The Game Begin!</button>
        <button id="tb">Takeback</button>
        <p>% of card showing</p>
        <input id="showPercent" value="25"></input>
      </div>
    );
  } 
}
