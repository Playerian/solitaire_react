import React from 'react';
//components
import Table from './Main/Table.js';
import Foundation from './Main/Foundation.js';
import Columns from './Main/Columns.js';

export default class Main extends React.Component {
    render(){
      let allCardPictures = [];
      for (let i = 1; i <= 13; i ++){
        for (let j = 1; j <= 4; j ++){
          let source = "cards/" + i + "_" + j + ".png";
          allCardPictures.push(<img className="preload" src={source} ></img>);
        }
      }
  
      return (
        <div className="App">
          <Table/>
          <div className="preload">
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