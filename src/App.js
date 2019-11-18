//import all important stuffs
import React from 'react';
import './App.css'; 
//components
import Table from './components/Table.js';

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
                  <div id="foundation">
                      <div id="f1" class="top"></div>
                      <div id="f2" class="top"></div>
                      <div id="f3" class="top"></div>
                      <div id="f4" class="top"></div>
                      <div id="useless" class="top empty"></div>
                      <div id="reveal" class="top empty"></div>
                      <div id="trash" class="top"></div>
                  </div>
              </div>
              <div id="columns">
                  <div id="c1" class="bottom"></div>
                  <div id="c2" class="bottom"></div>
                  <div id="c3" class="bottom"></div>
                  <div id="c4" class="bottom"></div>
                  <div id="c5" class="bottom"></div>
                  <div id="c6" class="bottom"></div>
                  <div id="c7" class="bottom"></div>
              </div>
          </div>
      </div>
    );
  }
}