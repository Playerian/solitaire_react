import React from 'react';
import Top from './Foundation/Top.js';

export default class Foundation extends React.Component {
  render(){
    return(
      <div id="foundation">
        <div id="f1" class="top"></div>
        <div id="f2" class="top"></div>
        <div id="f3" class="top"></div>
        <div id="f4" class="top"></div>
        <div id="useless" class="top empty"></div>
        <div id="reveal" class="top empty"></div>
        <div id="trash" class="top"></div>
      </div>
    );
  } 
}
