import React from 'react';
//components
import Table from './Main/Table.js';
import Foundation from './Main/Foundation.js';
import Columns from './Main/Columns.js';

export default class Main extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    let mainComponent = this;
    let variables = {
      //global var
      cards: {},
      trash: [],
      reveal: [],
      holding: false,
      holder: "",
      found: {
          f1: [],
          f2: [],
          f3: [],
          f4: []
      },
      height: 120,
      width: 88,
      showPercentOfCard: 25,
      timer: "",
      time: 0,
      beginned: false,
      preventer: false,
      lastAct: "",
      //constructor
      setCard: function(num, suit){
        this.name = (num - 1) * 4 + suit;
        this.number = num;
        this.suit = suit;
        this.row = 0;
        this.column = 0;
        this.inTrash = function(){
            if (trash.includes(this.name) || (reveal.includes(this.name))){
                return true;
            } else {
                return false;
            }
        };
        this.inFound = function(){
            for (var i = 1; i <= 4; i ++){
                if (found["f"+i].includes(this)){
                    return true;
                }
            }
            return false;
        };
        this.foundNo = function(){
            if (this.inFound() === true){
                for (var i = 1; i <= 4; i ++){
                    if (found["f"+i].includes(this)){
                        return i;
                    }
                }
            } else{
                return undefined;
            }
        };
        this.zAxis = 0;
        this.show = false;
        //check if another card is different color
        this.isDiffColor = function(card){
            //if black
            if (this.suit === 1 || this.suit === 3){
                if (card.suit === 2 || card.suit === 4){
                    return true;
                }
            }
            //if red
            if (this.suit === 2 || this.suit === 4){
                if (card.suit === 1 || card.suit === 3){
                    return true;
                }
            }
            return false;
        };
        //check if another card is 1 number higher
        this.isOneLower = function(card){
            if (this.number + 1 === card.number){
                return true;
            }
            return false;
        };
        //check if this card is 1 number higher
        this.isOneHigher = function(card){
            if (this.number - 1 === card.number){
                return true;
            }
            return false;
        };
        //reset pos(change position to 0, 0, also remove from reveal and trash and foundation)
        this.reset = function(){
            this.row = 0;
            this.column = 0;
            if (this.inTrash() === true){
                duang(trash, this.name);
                duang(reveal, this.name);
            }
            if (this.inFound() === true){
                duang(found["f"+this.foundNo()], this);
            }
        };
        //get the whole column of cards of this card's column
        this.getColumn = function(){
            if (this.column === 0){
                return 0;
            } else {
                //get all cards of this column
                var columnCards = [];
                for (var i = 1; i <= 52; i ++){
                    var card = cards[i];
                    if (parseInt(card.column) === parseInt(this.column)){
                        columnCards.push(card);
                    }
                }
                //sort them by their row
                var output = [];
                var breaker = 0;
                while (columnCards.length > 0){
                    breaker ++;
                    if (breaker >= 100){
                        console.log("exceed maximum loop");
                        break;
                    }
                    for (var i = 0; i < columnCards.length; i ++){
                        if (columnCards[i].row === 1){
                            output.push(columnCards[i]);
                            columnCards.splice(parseInt(i), 1);
                        }
                        if (output.length > 0 && output[output.length - 1] !== undefined){
                            if (columnCards.length > 0 && columnCards[i] !== undefined){
                                if ( parseInt(columnCards[i].row - 1) === parseInt(output[output.length - 1].row) ){
                                    output.push(columnCards[i]);
                                    columnCards.splice(parseInt(i), 1);
                                }
                            }
                        }
                    }
                }
                //return output
                return output;
            }
        };
        //check if this card is below holding 
        this.isBelowHolder = function(){
            if (holding === true){
                //get holder's column and check if columns are the same 
                var column = holder.column;
                if (column === this.column){
                    //if so check if this card is below holder
                    if (holder.row < this.row){
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            return undefined;
        };
      },
      //functions
      getCard: function(num, suit){
        return cards[(num - 1) * 4 + suit];
      },
      //component specific var
      percentCardShowing: 25
    };
    this.state = {variables: variables};
  }
  //profiting children
  setVar(index, value){
    let variables = this.state.variables;
    variables[index] = value;
    this.setState({variables: variables});
  }

  getVar(index){
    return this.state.variables[index];
  }

  //misc functions
  duang(thing, string){
    if (thing.includes(string)){
        thing.splice(thing.indexOf(string),1);
    }
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //rendering
  render(){
    let allCardPictures = [];
    for (let i = 1; i <= 13; i ++){
      for (let j = 1; j <= 4; j ++){
        let source = "cards/" + i + "_" + j + ".png";
        allCardPictures.push(<img className="preload" src={source} alt="" key={i + ":" + j} ></img>);
      }
    }

    return (
      <div className="App">
        <Table setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)}/>
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

//constructors
