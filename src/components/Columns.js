import React from 'react';
import Bottom from './Columns/Bottom';

export default class Columns extends React.Component {
  render(){
    let divs = [];
    for (let i = 0; i < 7; i ++){
      let idName = "c" + (i + 1);
      divs.push(<Bottom id={idName} className="bottom"/>);
    }
    return(
      <div>
        {divs}
      </div>
    );
  } 
}
