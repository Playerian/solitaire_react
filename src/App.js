//import all important stuffs
import React from 'react';
import './App.css'; 
//components
import Table from './components/Table.js';
import Foundation from './components/Foundation.js';
import Columns from './components/Columns.js';

export default class App extends React.Component {
  render(){
    let allCardPictures = [];
    for (let i = 1; i <= 13; i ++){
      for (let j = 1; j <= 4; i ++){
        let source = "cards/" + i + "_" + j + ".png";
        allCardPictures.push(<img className="preload" src={source} ></img>);
      }
    }

    return (
      <div className="App">
        <Table/>
        <div class="preload">
          {allCardPictures}
        </div>
        <div id="father">
              <div id="top">
                  <Foundation id="foundation"/>
              </div>
              <Columns id="columns"/>
          </div>
      </div>
    );
  }
}