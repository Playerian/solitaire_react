import React from 'react';
//components
import Table from './Main/Table.js';
import Foundation from './Main/Foundation.js';
import Columns from './Main/Columns.js';
//heart and soul
import Card from './Card.js'

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
                let showPercentOfCard = variables.showPercentOfCard;
                let height = variables.height;
                let cards = variables.cards;
                let holder = variables.holder;
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
                //render in field
                let allColumnComponents = [];
                for (var i = 1; i <= 7; i ++){
                    let columnComponents = [];
                    for (var i2 = 1; i2 <= 17; i2 ++){
                        var card = variables.getCardPos(i, i2);
                        if (card !== undefined){
                            //turn into props instead
                            var element = {}//$("<img>").attr("class","card");
                            element.class = "card";
                            element.id = card.name;//element.attr("id", card.name);
                            element.column = i;//element.addClass("c"+i);
                            element.row = i2;//element.addClass("r"+i2);
                            if (card.show === true){
                                element.src = "cards/" + card.number + "_" + card.suit + ".png";//element.attr("src", "cards/" + card.number + "_" + card.suit + ".png");
                            } else {
                                element.class = element.class + " unclickable"//element.addClass("unclickable");
                                element.src = "cards/back.png";//element.attr("src", "cards/back.png");
                            }
                            //add height to each cards
                            element.style = {}
                            element.style.top = (i2 - 1) * (100 - showPercentOfCard) / 100 * height * -1+"px";//element.css("top", (i2 - 1) * (100 - showPercentOfCard) / 100 * height * -1+"px");
                            //add z-axis to each cards
                            element.style["zIndex"] = i;//element.css("z-index", i);
                            //add highlight if holder is same 
                            if (variables.holder === card){
                                //check if holder is last card
                                if (variables.holder.getColumn()[variables.holder.getColumn().length - 1] === variables.holder){
                                   element.class += " highlightLoner"; //element.addClass("highlightLoner");
                                } else {
                                    element.class += " highlight";//element.addClass("highlight");
                                }
                            }
                            //add midlight if below holder
                            //add lowlight if last below holder
                            if (card.isBelowHolder() === true){
                                if (card.getColumn()[card.getColumn().length - 1] === card){
                                    element.class += "lowlight";//element.addClass("lowlight");
                                } else {
                                    element.class += "midlight";//element.addClass("midlight");
                                }
                            }
                            element.style.width = variables.width+"px";
                            element.style.height = variables.height+"px";
                            //$("#c"+i).append(element);
                            //react is cancer
                            columnComponents.push(<img className={element.class} style={element.style} src={element.src} id={element.id} column={element.column} row={element.row}></img>);
                        }else{
                            break;
                        }
                    }
                    //push columnComponent
                    allColumnComponents[i] = columnComponents;
                }
                let allTrashComponents = [];
                //render in trash
                let trash = variables.trash;
                for (var i = 0; i < trash.length; i ++){
                    var element = {}
                    element.class = "class";// var element = $("<img>").attr("class","card");
                    element.id = variables.cards[trash[i]];// element.attr("id", cards[trash[i]]);
                    element.class += " trash";// element.addClass("trash");
                    element.class += " unclickable";// element.addClass("unclickable");
                    element.src = "cards/back.png";// element.attr("src", "cards/back.png");
                    element.style = {};
                    element.style.width = variables.width+"px";
                    element.style.height = variables.height+"px";
                    allTrashComponents.push(<img className={element.class} id={element.id} src={element.src} style={element.style}></img>);// $("#trash").append(element);
                }
                //render in reveal
                let allRevealComponents = [];
                let reveal = variables.reveal;
                for (var i = 0; i < reveal.length; i ++){
                    var card = cards[reveal[i]];
                    var element = {class: "card"};// var element = $("<img>").attr("class","card");
                    element.id = reveal[i];// element.attr("id", reveal[i]);
                    element.class += " reveal";// element.addClass("reveal");
                    element.src = "cards/" + card.number + "_" + card.suit + ".png";// element.attr("src", "cards/" + card.number + "_" + card.suit + ".png");
                    if (holder === card){
                        element.class += " highlight";//element.addClass("highlight");
                    }
                    element.style = {};
                    element.style.width = variables.width+"px";
                    element.style.height = variables.height+"px";
                    allRevealComponents.push(<img src={element.src} className={element.class} src={element.src} id={element.id} style={element.style}></img>);//$("#reveal").append(element);
                }
                //render in foundation
                let allFoundComponents = [];
                let found = variables.found;
                for (var i2 = 1; i2 <= 4; i2 ++){
                    var foundation = found["f"+i2];
                    for (var i = 0; i < foundation.length; i ++){
                        var card = foundation[i];
                        var element = {};
                        element.class = "card";// var element = $("<img>").attr("class","card");
                        element.id = foundation[i].name;// element.attr("id", foundation[i].name);
                        element.class += " foundCard";// element.addClass("foundCard");
                        element.class += " unclickable";// element.addClass("unclickable");
                        element.src = "cards/" + card.number + "_" + card.suit + ".png";// element.attr("src", "cards/" + card.number + "_" + card.suit + ".png");
                        if (holder === card){
                            element.class += " highlight";//element.addClass("highlight");
                        }
                        element.style = {};
                        element.style.width = variables.width+"px";
                        element.style.height = variables.height+"px";
                        // $("#f"+i2).append(element);
                        allFoundComponents.push(<img className={element.class} id={element.id} src={element.src} style={element.style}></img>);
                    }
                }

                //react is cancer
                mainComponent.setState({
                    allColumnComponents: allColumnComponents,
                    allTrashComponents: allTrashComponents,
                    allRevealComponents: allRevealComponents,
                    allFoundComponents: allFoundComponents
                });
            },
            //misc functions
            duang: function (thing, string) {
                if (thing.includes(string)) {
                    thing.splice(thing.indexOf(string), 1);
                }
            },
            randomInt: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            //component specific var
            percentCardShowing: 25,
            //component specific function
            trashClicked: function () {
                //record move
                variables.lastAct = "undefined,trash,undefined,undefined";
                //clear all selections
                variables.holding = false;
                variables.holder = undefined;
                //reveal a card if trash is not empty
                let trash = variables.trash;
                let cards = variables.cards;
                let reveal = variables.reveal;
                if (trash.length > 0) {
                    var card = trash.shift();
                    reveal.push(card);
                    cards[card].show = true;
                    variables.render();
                } else {
                    //..else place reveals back into the trash
                    //pre-record the length of reveal
                    var length = reveal.length;
                    for (var i = 0; i < length; i++) {
                        //change them into facedown
                        var card = reveal.shift();
                        cards[card].show = false;
                        //shift back
                        trash.push(card);
                    }
                    variables.render();
                }
            },
            cardClicked: function (id) {
                var card = variables.cards[parseInt(id)];
                console.log(card);
                //main function (just for quick use of return)
                function mainDish() {
                    let holding = variables.holding;
                    let found = variables.found;
                    let holder = variables.holder;
                    let getCardPos = variables.getCardPos;
                    let lastAct = variables.lastAct;
                    let duang = variables.duang;
                    let reveal = variables.reveal;
                    let render = variables.render;
                    //check if card is face up
                    if (card.show === true) {
                        //release a card if holding a card
                        if (holding === true) {
                            //check if holding the same card
                            if (card === holder) {
                                //check if can move to foundation
                                for (var i = 4; i >= 1; i--) {
                                    var foundation = found["f" + i];
                                    //check if not empty
                                    if (foundation.length > 0) {
                                        //get last card in foundation
                                        var last = foundation[foundation.length - 1];
                                        if (holder.isOneHigher(last)) {
                                            //then check if suits are the same
                                            if (holder.suit === last.suit) {
                                                //then check if the holder card is the last card at the column
                                                //or in trash
                                                if (getCardPos(holder.column, holder.row + 1) === undefined || holder.inTrash() === true) {
                                                    //record action
                                                    if (holder.inTrash() === true) {
                                                        lastAct = holder.name + "," + "found" + "," + "trash" + "," + number;
                                                    } else {
                                                        lastAct = holder.name + "," + "found" + "," + "C" + holder.column + "R" + holder.row + "," + number;
                                                    }
                                                    //reset the card's position
                                                    holder.reset();
                                                    //then move holder to the foundation
                                                    foundation.push(holder);
                                                }
                                            }
                                        }
                                    } else {
                                        //if not empty
                                        //if ace push to found
                                        if (card.number === 1) {
                                            //record action
                                            if (holder.inTrash() === true) {
                                                lastAct = holder.name + "," + "found" + "," + "trash" + "," + number;
                                            } else {
                                                lastAct = holder.name + "," + "found" + "," + "C" + holder.column + "R" + holder.row + "," + number;
                                            }
                                            //reset the card's position
                                            holder.reset();
                                            //then move holder to the foundation
                                            foundation.push(holder);
                                        }
                                    }
                                }
                                //remove holding status
                                holder = undefined;
                                holding = false;
                                return;
                            }
                            //check if releasing onto the right card
                            //check if clicked card is not on trash and foundation
                            if (card.inTrash() === false && card.inFound() === false) {
                                //then check if able to move
                                if (holder.isDiffColor(card) && holder.isOneLower(card) && card.getColumn()[card.getColumn().length - 1] === card) {
                                    //if holder is on the field
                                    if (holder.inTrash() === false && holder.inFound() === false) {
                                        var row = holder.row;
                                        var column = holder.column;
                                        //if so then move the the holder and cards under holder under the card
                                        //put all cards under the holder into a list
                                        var list = [];
                                        for (var i = holder.row; i <= 17; i++) {
                                            var cardBelow = getCardPos(holder.column, i);
                                            if (cardBelow !== undefined) {
                                                list.push(cardBelow);
                                            } else {
                                                break;
                                            }
                                        }
                                        //after the list has been filled(or not) move them under the (clicked)card
                                        //store the list length first
                                        var listLength = list.length;
                                        //iterate the list
                                        for (var i = 0; i < listLength; i++) {
                                            //set column same as the card
                                            list[i].column = card.column;
                                            //set row below the card in a fast way
                                            list[i].row = card.row + i + 1;
                                        }
                                        //record moving act
                                        lastAct = holder.name + "," + "move" + "," + "C" + column + "R" + row + "," + "C" + holder.column + "R" + holder.row;
                                    } else {
                                        //if in trash then move directly to field
                                        if (holder.inTrash() === true) {
                                            holder.column = card.column;
                                            holder.row = card.row + 1;
                                            //also remove holder in reveal pile
                                            duang(reveal, holder.name);
                                            //record moving act
                                            lastAct = holder.name + "," + "move" + "," + "trash" + "," + "C" + holder.column + "R" + holder.row;
                                        }
                                        //if in foundation then remove foundation status
                                        if (holder.inFound() === true) {
                                            var number = found["f" + holder.foundNo()];
                                            holder.column = card.column;
                                            holder.row = card.row + 1;
                                            //same as trash
                                            duang(number, holder);
                                            //record moving act
                                            lastAct = holder.name + "," + "move" + "," + holder.foundNo() + "," + "C" + holder.column + "R" + holder.row;
                                        }
                                    }
                                    //remove holding status
                                    holding = false;
                                    holder = undefined;
                                    //and that's it
                                    return;
                                }
                            }



                            //end of if holding
                        }
                        //take up a card if holding nothing
                        if (holding === false) {
                            holding = true;
                            holder = card;
                            return;
                        }
                        //end of if card is face up
                    }
                };
                //just add a function to use return
                mainDish();
                variables.render();
            }
        };
        //final set
        this.state = { 
            variables: variables,
            allColumnComponents: [],
            allFoundComponents: [],
            allRevealComponents: [],
            allTrashComponents: []
        };
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
                    <img className="preload" src="cards/back.png" alt="" key={0} ></img>
                </div>
                <div id="father">
                    <div id="top">
                        <Foundation trash={this.state.allTrashComponents} reveal={this.state.allRevealComponents} found={this.state.allFoundComponents} id="foundation" setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)} cardComponent={Card} />
                    </div>
                    <Columns data={this.state.allColumnComponents} id="columns" setVar={(index, value) => this.setVar(index, value)} getVar={(index) => this.getVar(index)} cardComponent={Card} />
                </div>
            </div>
        );
    }
}