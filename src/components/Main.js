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
            setCard: function (num, suit) {
                let vars = mainComponent.state.variables;
                this.name = (num - 1) * 4 + suit;
                this.number = num;
                this.suit = suit;
                this.row = 0;
                this.column = 0;
                this.inTrash = function () {
                    if (vars.trash.includes(this.name) || (vars.reveal.includes(this.name))) {
                        return true;
                    } else {
                        return false;
                    }
                };
                this.inFound = function () {
                    for (let i = 1; i <= 4; i++) {
                        if (vars.found["f" + i].includes(this)) {
                            return true;
                        }
                    }
                    return false;
                };
                this.foundNo = function () {
                    if (this.inFound() === true) {
                        for (let i = 1; i <= 4; i++) {
                            if (vars.found["f" + i].includes(this)) {
                                return i;
                            }
                        }
                    } else {
                        return undefined;
                    }
                };
                this.zAxis = 0;
                this.show = false;
                //check if another card is different color
                this.isDiffColor = function (card) {
                    //if black
                    if (this.suit === 1 || this.suit === 3) {
                        if (card.suit === 2 || card.suit === 4) {
                            return true;
                        }
                    }
                    //if red
                    if (this.suit === 2 || this.suit === 4) {
                        if (card.suit === 1 || card.suit === 3) {
                            return true;
                        }
                    }
                    return false;
                };
                //check if another card is 1 number higher
                this.isOneLower = function (card) {
                    if (this.number + 1 === card.number) {
                        return true;
                    }
                    return false;
                };
                //check if this card is 1 number higher
                this.isOneHigher = function (card) {
                    if (this.number - 1 === card.number) {
                        return true;
                    }
                    return false;
                };
                //reset pos(change position to 0, 0, also remove from reveal and trash and foundation)
                this.reset = function () {
                    this.row = 0;
                    this.column = 0;
                    if (this.inTrash() === true) {
                        vars.duang(vars.trash, this.name);
                        vars.duang(vars.reveal, this.name);
                    }
                    if (this.inFound() === true) {
                        vars.duang(vars.found["f" + this.foundNo()], this);
                    }
                };
                //get the whole column of cards of this card's column
                this.getColumn = function () {
                    if (this.column === 0) {
                        return 0;
                    } else {
                        //get all cards of this column
                        var columnCards = [];
                        for (let i = 1; i <= 52; i++) {
                            var card = vars.cards[i];
                            if (parseInt(card.column) === parseInt(this.column)) {
                                columnCards.push(card);
                            }
                        }
                        //sort them by their row
                        var output = [];
                        var breaker = 0;
                        while (columnCards.length > 0) {
                            breaker++;
                            if (breaker >= 100) {
                                console.log("exceed maximum loop");
                                break;
                            }
                            for (let i = 0; i < columnCards.length; i++) {
                                if (columnCards[i].row === 1) {
                                    output.push(columnCards[i]);
                                    columnCards.splice(parseInt(i), 1);
                                }
                                if (output.length > 0 && output[output.length - 1] !== undefined) {
                                    if (columnCards.length > 0 && columnCards[i] !== undefined) {
                                        if (parseInt(columnCards[i].row - 1) === parseInt(output[output.length - 1].row)) {
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
                this.isBelowHolder = function () {
                    if (vars.holding === true) {
                        //get holder's column and check if columns are the same 
                        var column = vars.holder.column;
                        if (column === this.column) {
                            //if so check if this card is below holder
                            if (vars.holder.row < this.row) {
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
            getCard: function (num, suit) {
                return variables.cards[(num - 1) * 4 + suit];
            },
            getCardPos: function (column, row) {
                for (let i = 1; i <= 52; i++) {
                    if (variables.cards[i].row === row && variables.cards[i].inTrash() === false && variables.cards[i].inFound() === false) {
                        if (variables.cards[i].column === column) {
                            return variables.cards[i];
                        }
                    }
                }
                return undefined;
            },
            columnHeight: function (columnNo) {
                var count = 0;
                for (let i = 1; i <= 52; i++) {
                    if (parseInt(variables.cards[i].column) === parseInt(columnNo)) {
                        count++;
                    }
                }
                return count;
            },
            init: function () {
                variables.cards = {};
                variables.trash = [];
                variables.found = {
                    f1: [],
                    f2: [],
                    f3: [],
                    f4: []
                };
                variables.reveal = [];
                variables.holder = undefined;
                variables.holding = false;
                //card declare
                for (let i = 1; i <= 13; i++) {
                    for (var i2 = 1; i2 <= 4; i2++) {
                        variables.cards[(i - 1) * 4 + i2] = new variables.setCard(i, i2);
                    }
                }

                //deck create
                var deck = [];
                for (let i = 1; i <= 52; i++) {
                    deck.push(i);
                }
                console.log("original deck: " + deck.length);

                //place cards to field
                for (let i = 1; i <= 7; i++) {
                    for (var i2 = 1; i2 <= i; i2++) {
                        var card = deck[variables.randomInt(0, deck.length - 1)];
                        variables.duang(deck, card);
                        variables.cards[card].column = i;
                        variables.cards[card].row = i2;
                        if (i == i2) {
                            variables.cards[card].show = true;
                        } else {
                            variables.cards[card].show = false;
                        }
                    }
                }
                console.log("placed to field: " + deck.length);
                //place cards to trash
                var deckLength = deck.length;
                for (let i = 0; i < deckLength; i++) {
                    var card = deck[variables.randomInt(0, deck.length - 1)];
                    variables.duang(deck, card);
                    variables.trash.push(card);
                }
                console.log("placed to trash: " + deck.length);
                //hides preload docs
                //$(".preload").hide();

                //render up
                variables.render();

                //reset timer
                variables.time = 0;
                //$("#timer").text("00:00");

                //only once
                if (variables.beginned === false) {
                    variables.beginned = true;
                    variables.timer = setInterval(function () {
                        variables.time++;
                        var second = variables.time;
                        var minute = 0;
                        while (second >= 60) {
                            second -= 60;
                            minute++;
                        }
                        minute = minute.toString(10);
                        second = second.toString(10);
                        while (minute.length < 2) {
                            minute = "0" + minute;
                        }

                        while (second.length < 2) {
                            second = "0" + second;
                        }
                        //$("#timer").text(minute+":"+second);
                    }, 1000);
                }

                //end of init
            },
            render: function () {
                //Any necessary changes relative to cards
                //if the bottommost card in a column is facedown, then flip it up
                for (let i = 1; i <= 7; i++) {
                    for (var i2 = 1; i2 <= 17; i2++) {
                        var card = variables.getCardPos(i, i2);
                        if (card !== undefined) {
                            if (card.show === false && variables.getCardPos(i, i2 + 1) === undefined) {
                                card.show = true;
                            }
                        }
                    }
                }

                //real rendering process
                //react is cancer
                this.setState({ variables: variables });
            },
            //misc functions
            duang: function(thing, string) {
                if (thing.includes(string)) {
                    thing.splice(thing.indexOf(string), 1);
                }
            },
            randomInt: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            //component specific var
            percentCardShowing: 25
        };
        //final set
        this.state = { variables: variables };
    }
    //profiting children
    setVar(index, value) {
        let variables = this.state.variables;
        variables[index] = value;
        this.setState({ variables: variables });
    }

    getVar(index) {
        return this.state.variables[index];
    }

    //rendering
    render() {
        let vars = this.state.variables;
        let allCardPictures = [];
        for (let i = 1; i <= 13; i++) {
            for (let j = 1; j <= 4; j++) {
                let source = "cards/" + i + "_" + j + ".png";
                allCardPictures.push(<img className="preload" src={source} alt="" key={i + ":" + j} ></img>);
            }
        }
        return (
            <div className="App">
                <Table setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)} />
                <div className="preload">
                    {allCardPictures}
                </div>
                <div id="father">
                    <div id="top">
                        <Foundation id="foundation" setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)}/>
                    </div>
                    <Columns id="columns" setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)} />
                </div>
            </div>
        );
    }
}