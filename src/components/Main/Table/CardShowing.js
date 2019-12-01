import React from 'react';
//import NameList from './NameList/NameList.js';

export default class CardShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 25};
  }
  handleChange(event) {
    this.setState({value: parseInt(event.target.value)});
    console.log(event.target.value)
    this.props.setVar("showPercentOfCard", event.target.value);
    if (this.props.getVar("beginned")){
      this.props.getVar("render")();
    }
  }

  render(){
    return(
      <input id="showPercent" value={this.state.value || 0} onChange={(e) => this.handleChange(e)}></input>
    );
  } 
}
