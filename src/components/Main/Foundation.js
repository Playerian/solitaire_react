import React from 'react';
import Top from './Foundation/Top.js';

export default class Foundation extends React.Component {
  render(){
    return(
      <div>
        <Top id="f1" className="top"/>
        <Top id="f2" className="top"/>
        <Top id="f3" className="top"/>
        <Top id="f4" className="top"/>
        <Top id="useless" className="top empty"/>
        <Top id="reveal" className="top empty"/>
        <Top id="trash" className="top"/>
      </div>
    );
  } 
}
