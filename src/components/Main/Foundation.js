import React from 'react';
import Top from './Foundation/Top.js';
import Reveal from './Foundation/Reveal.js';
import Trash from './Foundation/Trash.js';

export default class Foundation extends React.Component {
  render(){
    let getVar = this.props.getVar;
    let setVar = this.props.setVar;
    let running = getVar("beginned");
    return(
      <div id={this.props.id}>
        <Top data={this.props.found[0]}cardComponent={this.props.cardComponent} id="f1" className="top" key={1} setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
        <Top data={this.props.found[1]}cardComponent={this.props.cardComponent} id="f2" className="top" key={2} setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
        <Top data={this.props.found[2]}cardComponent={this.props.cardComponent} id="f3" className="top" key={3} setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
        <Top data={this.props.found[3]}cardComponent={this.props.cardComponent} id="f4" className="top" key={4} setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
        <Top cardComponent={this.props.cardComponent} id="useless" className="top empty"/>
        <Reveal data={this.props.reveal} cardComponent={this.props.cardComponent} id="reveal" className="top empty" setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
        <Trash data={this.props.trash} cardComponent={this.props.cardComponent} id="trash" className="top" setVar={(index, value) => setVar(index, value)} getVar={(index) => getVar(index)}/>
      </div>
    );
  } 
}
