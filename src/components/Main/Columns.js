import React from 'react';
import Bottom from './Columns/Bottom';

export default class Columns extends React.Component {
  render(){
    let divs = [];
    let data = this.props.data;
    for (let i = 1; i <= 7; i ++){
      let idName = "c" + i;
      if (this.props.getVar("beginned")){
        divs.push(<Bottom data={data[i]} cardComponent={this.props.cardComponent} id={idName} className="bottom" key={i}/>);
      }else{
        divs.push(<Bottom cardComponent={this.props.cardComponent} id={idName} className="bottom" key={i}/>);
      }
      
    }
    return(
      <div id={this.props.id}>
        {divs}
      </div>
    );
  } 
}
