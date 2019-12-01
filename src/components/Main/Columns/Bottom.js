import React from 'react';

export default class Bottom extends React.Component {
  render(){
    let cardComponent = this.props.cardComponent;
    return(
      <div id={this.props.id} className={this.props.className}>

      </div>
    );
  } 
}