(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[0],{10:function(e,t,r){e.exports=r(17)},15:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(9),s=r.n(o),i=(r(15),r(16),r(7)),l=r(1),c=r(2),h=r(4),d=r(3),u=r(6),p=r(5),f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.time,t=0;e>=60;)e-=60,t++;for(t=t.toString(10),e=e.toString(10);t.length<2;)t="0"+t;for(;e.length<2;)e="0"+e;return a.a.createElement("div",{id:this.props.id},t,":",e)}}]),t}(a.a.Component),m=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={value:25},r}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:parseInt(e.target.value)}),console.log(e.target.value),this.props.setVar("showPercentOfCard",e.target.value),this.props.getVar("beginned")&&this.props.getVar("render")()}},{key:"render",value:function(){var e=this;return a.a.createElement("input",{id:"showPercent",value:this.state.value||0,onChange:function(t){return e.handleChange(t)}})}}]),t}(a.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.getVar("init")()}},{key:"render",value:function(){var e=this;return a.a.createElement("button",{id:this.props.id,onClick:function(t){return e.handleClick()}},"Let The Game Begin!")}}]),t}(a.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.getVar("takeBack")()}},{key:"render",value:function(){var e=this;return a.a.createElement("button",{id:this.props.id,onClick:function(){return e.handleClick()}},"Takeback")}}]),t}(a.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"table"},a.a.createElement(f,{id:"timer",time:this.props.getVar("time")}),a.a.createElement(g,{id:"start",setVar:function(t,r){return e.props.setVar(t,r)},getVar:function(t){return e.props.getVar(t)}}),a.a.createElement(v,{id:"tb",getVar:function(t){return e.props.getVar(t)}}),a.a.createElement("p",null,"% of card showing"),a.a.createElement(m,{setVar:function(t,r){return e.props.setVar(t,r)},getVar:function(t){return e.props.getVar(t)}}))}}]),t}(a.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.getVar("topClicked")(this.props.id[1])}},{key:"onDragStart",value:function(e){var t=this.props.getVar("found")["f"+this.props.id[1]];t.length>0&&e.dataTransfer.setData("data",t[t.length-1].name)}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){e.preventDefault();var t=e.dataTransfer.getData("data");t&&(this.props.getVar("cardClicked")(t,!0),this.props.getVar("topClicked")(this.props.id[1]))}},{key:"render",value:function(){var e=this;if("useless"===this.props.id||!this.props.data)return a.a.createElement("div",{id:this.props.id,className:this.props.className});this.props.cardComponent;var t=this.props.getVar;this.props.setVar,t("beginned");return a.a.createElement("div",{draggable:"true",onDragStart:function(t){return e.onDragStart(t)},onDragOver:function(t){return e.allowDrop(t)},onDrop:function(t){return e.onDrop(t)},id:this.props.id,className:this.props.className,onClick:function(){return e.handleClick()}},this.props.data)}}]),t}(a.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.cardComponent;var e=this.props.getVar;this.props.setVar,e("beginned");return a.a.createElement("div",{id:this.props.id,className:this.props.className},this.props.data)}}]),t}(a.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.props.getVar;this.props.setVar;t("beginned")&&t("trashClicked")()}},{key:"render",value:function(){var e=this,t=(this.props.cardComponent,this.props.data);return t?a.a.createElement("div",{id:this.props.id,className:this.props.className,onClick:function(t){return e.handleClick(t)}},t):a.a.createElement("div",{id:this.props.id,className:this.props.className,onClick:function(t){return e.handleClick(t)}})}}]),t}(a.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.getVar,t=this.props.setVar;e("beginned");return a.a.createElement("div",{id:this.props.id},a.a.createElement(C,{data:this.props.found[0],cardComponent:this.props.cardComponent,id:"f1",className:"top",key:1,setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}),a.a.createElement(C,{data:this.props.found[1],cardComponent:this.props.cardComponent,id:"f2",className:"top",key:2,setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}),a.a.createElement(C,{data:this.props.found[2],cardComponent:this.props.cardComponent,id:"f3",className:"top",key:3,setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}),a.a.createElement(C,{data:this.props.found[3],cardComponent:this.props.cardComponent,id:"f4",className:"top",key:4,setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}),a.a.createElement(C,{cardComponent:this.props.cardComponent,id:"useless",className:"top empty"}),a.a.createElement(k,{data:this.props.reveal,cardComponent:this.props.cardComponent,id:"reveal",className:"top empty",setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}),a.a.createElement(w,{data:this.props.trash,cardComponent:this.props.cardComponent,id:"trash",className:"top",setVar:function(e,r){return t(e,r)},getVar:function(t){return e(t)}}))}}]),t}(a.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.getVar("bottomClicked")(this.props.id[1])}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){e.preventDefault();var t=e.dataTransfer.getData("data");t&&0===this.props.getVar("columnHeight")(parseInt(this.props.id[1]))&&(this.props.getVar("cardClicked")(t,!0),this.props.getVar("bottomClicked")(this.props.id[1]))}},{key:"render",value:function(){var e=this,t=(this.props.cardComponent,this.props.data);return t?a.a.createElement("div",{onDragOver:function(t){return e.allowDrop(t)},onDrop:function(t){return e.onDrop(t)},id:this.props.id,className:this.props.className,onClick:function(){return e.handleClick()}},t):a.a.createElement("div",{id:this.props.id,className:this.props.className})}}]),t}(a.a.Component),V=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.data,r=this.props.getVar,n=1;n<=7;n++){var o="c"+n;this.props.getVar("beginned")?e.push(a.a.createElement(O,{getVar:function(e){return r(e)},data:t[n],cardComponent:this.props.cardComponent,id:o,className:"bottom",key:n})):e.push(a.a.createElement(O,{getVar:function(e){return r(e)},cardComponent:this.props.cardComponent,id:o,className:"bottom",key:n}))}return a.a.createElement("div",{id:this.props.id},e)}}]),t}(a.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.getVar("cardClicked")(this.props.id.name)}},{key:"onDragStart",value:function(e){e.dataTransfer.setData("data",this.props.id.name)}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){e.preventDefault();var t=e.dataTransfer.getData("data");t&&(this.props.getVar("cardClicked")(t,!0),this.props.getVar("cardClicked")(this.props.id.name))}},{key:"render",value:function(){var e=this;return a.a.createElement("img",{draggable:"true",onDragStart:function(t){return e.onDragStart(t)},onDragOver:function(t){return e.allowDrop(t)},onDrop:function(t){return e.onDrop(t)},id:this.props.id.name,className:this.props.className,src:this.props.src,style:this.props.style,row:this.props.row,column:this.props.column,onClick:function(){return e.handleClick()}})}}]),t}(a.a.Component),E=function(e){function t(e){var r;Object(l.a)(this,t),r=Object(h.a)(this,Object(d.a)(t).call(this,e));var n=Object(u.a)(r),o={cards:{},trash:[],reveal:[],holding:!1,holder:0,found:{f1:[],f2:[],f3:[],f4:[]},height:120,width:88,showPercentOfCard:25,timer:"",time:0,beginned:!1,preventer:!1,lastAct:[],setCard:function(e,t){var r=n.state.variables;this.name=4*(e-1)+t,this.number=e,this.suit=t,this.row=0,this.column=0,this.inTrash=function(){return!(!r.trash.includes(this.name)&&!r.reveal.includes(this.name))},this.inFound=function(){for(var e=1;e<=4;e++)if(r.found["f"+e].includes(this))return!0;return!1},this.foundNo=function(){if(!0===this.inFound())for(var e=1;e<=4;e++)if(r.found["f"+e].includes(this))return e},this.zAxis=0,this.show=!1,this.isDiffColor=function(e){return!(1!==this.suit&&3!==this.suit||2!==e.suit&&4!==e.suit)||!(2!==this.suit&&4!==this.suit||1!==e.suit&&3!==e.suit)},this.isOneLower=function(e){return this.number+1===e.number},this.isOneHigher=function(e){return this.number-1===e.number},this.reset=function(){this.row=0,this.column=0,!0===this.inTrash()&&(r.duang(r.trash,this.name),r.duang(r.reveal,this.name)),!0===this.inFound()&&r.duang(r.found["f"+this.foundNo()],this)},this.getColumn=function(){if(0===this.column)return 0;for(var e=[],t=1;t<=52;t++){var n=r.cards[t];parseInt(n.column)===parseInt(this.column)&&e.push(n)}for(var a=[],o=0;e.length>0;){if(++o>=100){console.log("exceed maximum loop");break}for(var s=0;s<e.length;s++)1===e[s].row&&(a.push(e[s]),e.splice(parseInt(s),1)),a.length>0&&void 0!==a[a.length-1]&&e.length>0&&void 0!==e[s]&&parseInt(e[s].row-1)===parseInt(a[a.length-1].row)&&(a.push(e[s]),e.splice(parseInt(s),1))}return a},this.isBelowHolder=function(){if(!0===r.holding&&r.holder.column===this.column)return r.holder.row<this.row}},getCard:function(e,t){return o.cards[4*(e-1)+t]},getCardPos:function(e,t){for(var r=1;r<=52;r++)if(o.cards[r].row===t&&!1===o.cards[r].inTrash()&&!1===o.cards[r].inFound()&&o.cards[r].column===e)return o.cards[r]},columnHeight:function(e){for(var t=0,r=1;r<=52;r++)parseInt(o.cards[r].column)===parseInt(e)&&t++;return t},init:function(){o.cards={},o.trash=[],o.found={f1:[],f2:[],f3:[],f4:[]},o.reveal=[],o.holder=void 0,o.holding=!1,o.lastAct=[];for(var e=1;e<=13;e++)for(var t=1;t<=4;t++)o.cards[4*(e-1)+t]=new o.setCard(e,t);for(var r=[],a=1;a<=52;a++)r.push(a);console.log("original deck: "+r.length);for(var s=1;s<=7;s++)for(t=1;t<=s;t++){var i=r[o.randomInt(0,r.length-1)];o.duang(r,i),o.cards[i].column=s,o.cards[i].row=t,o.cards[i].show=s==t}console.log("placed to field: "+r.length);for(var l=r.length,c=0;c<l;c++){i=r[o.randomInt(0,r.length-1)];o.duang(r,i),o.trash.push(i)}console.log("placed to trash: "+r.length),o.render(),o.time=0,!1===o.beginned&&(o.beginned=!0,o.timer=setInterval((function(){o.time++,n.setState({variables:o})}),1e3))},render:function(){for(var e=o.showPercentOfCard,t=o.height,r=o.cards,s=o.holder,l=1;l<=7;l++)for(var c=1;c<=17;c++){void 0!==(b=o.getCardPos(l,c))&&!1===b.show&&void 0===o.getCardPos(l,c+1)&&(b.show=!0)}for(var h=[],d=1;d<=7;d++){var u=[];for(c=1;c<=17;c++){if(void 0===(b=o.getCardPos(d,c)))break;(O={class:"card"}).id=b,O.column=d,O.row=c,!0===b.show?O.src="cards/"+b.number+"_"+b.suit+".png":(O.class=O.class+" unclickable",O.src="cards/back.png"),O.style={},O.style.top=(c-1)*(100-e)/100*t*-1+"px",O.style.zIndex=d,o.holder===b&&(o.holder.getColumn()[o.holder.getColumn().length-1]===o.holder?O.class+=" highlightLoner":O.class+=" highlight"),!0===b.isBelowHolder()&&(b.getColumn()[b.getColumn().length-1]===b?O.class+=" lowlight":O.class+=" midlight"),O.style.width=o.width+"px",O.style.height=o.height+"px",u.push(a.a.createElement(j,{key:O.column+":"+O.row,getVar:function(e){return n.getVar(e)},className:O.class,style:O.style,src:O.src,id:O.id,column:O.column,row:O.row}))}h[d]=u}var p=[],f=o.trash;for(d=0;d<f.length;d++){(O={class:"class"}).id=o.cards[f[d]],O.class+=" trash",O.class+=" unclickable",O.src="cards/back.png",O.style={},O.style.width=o.width+"px",O.style.height=o.height+"px",p.push(a.a.createElement(j,{key:d,getVar:function(e){return n.getVar(e)},className:O.class,id:O.id,src:O.src,style:O.style}))}var m=[],g=o.reveal;for(d=0;d<g.length;d++){var v,b=r[g[d]];(O={class:"card"}).id=b,O.class+=" reveal",O.src="cards/"+b.number+"_"+b.suit+".png",s===b&&(O.class+=" highlight"),O.style={},O.style.width=o.width+"px",O.style.height=o.height+"px",m.push(a.a.createElement(j,(v={key:d,getVar:function(e){return n.getVar(e)},src:O.src,className:O.class},Object(i.a)(v,"src",O.src),Object(i.a)(v,"id",O.id),Object(i.a)(v,"style",O.style),v)))}var C=[],k=o.found;for(c=1;c<=4;c++){var w=k["f"+c],y=[];for(d=0;d<w.length;d++){var O;b=w[d];(O={class:"card"}).id=w[d],O.class+=" foundCard",O.class+=" unclickable",O.src="cards/"+b.number+"_"+b.suit+".png",s===b&&(O.class+=" highlight"),O.style={},O.style.width=o.width+"px",O.style.height=o.height+"px",y.push(a.a.createElement(j,{key:d+":"+c,getVar:function(e){return n.getVar(e)},className:O.class,id:O.id,src:O.src,style:O.style}))}C.push(y)}this.checkVictory(),console.log(this.lastAct),n.setState({allColumnComponents:h,allTrashComponents:p,allRevealComponents:m,allFoundComponents:C})},duang:function(e,t){e.includes(t)&&e.splice(e.indexOf(t),1)},randomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},trashClicked:function(){o.lastAct.push("undefined,trash,undefined,undefined"),o.holding=!1,o.holder=void 0;var e=o.trash,t=o.cards,r=o.reveal;if(e.length>0){var n=e.shift();r.push(n),t[n].show=!0,o.render()}else{for(var a=r.length,s=0;s<a;s++){t[n=r.shift()].show=!1,e.push(n)}o.render()}},cardClicked:function(e,t){var r=o.cards[parseInt(e)];t&&(o.holder=0,o.holding=!1),function(){if(!0===r.show){if(!0===o.holding){if(r===o.holder){for(var e=4;e>=1;e--){var t=o.found["f"+e];if(t.length>0){var n=t[t.length-1];o.holder.isOneHigher(n)&&o.holder.suit===n.suit&&(void 0!==o.getCardPos(o.holder.column,o.holder.row+1)&&!0!==o.holder.inTrash()||(!0===o.holder.inTrash()?o.lastAct.push(o.holder.name+",found,trash,"+d):o.lastAct.push(o.holder.name+",found,C"+o.holder.column+"R"+o.holder.row+","+d),o.holder.reset(),t.push(o.holder)))}else if(1===r.number){!0===o.holder.inTrash()?o.lastAct.push(o.holder.name+",found,trash,"+d):o.lastAct.push(o.holder.name+",found,C"+o.holder.column+"R"+o.holder.row+","+d),o.holder.reset(),t.push(o.holder);break}}return o.holder=void 0,void(o.holding=!1)}if(!1===r.inTrash()&&!1===r.inFound()&&o.holder.isDiffColor(r)&&o.holder.isOneLower(r)&&r.getColumn()[r.getColumn().length-1]===r){if(!1===o.holder.inTrash()&&!1===o.holder.inFound()){var a=o.holder.row,s=o.holder.column,i=[];for(e=o.holder.row;e<=17;e++){var l=o.getCardPos(o.holder.column,e);if(void 0===l)break;i.push(l)}var c=i.length,h="";for(e=0;e<c;e++)i[e].column=r.column,i[e].row=r.row+e+1,e>0?h+=":"+i[e].name:h=i[e].name;o.lastAct.push(h+",move,C"+s+"R"+a+",C"+o.holder.column+"R"+o.holder.row)}else if(!0===o.holder.inTrash()&&(o.holder.column=r.column,o.holder.row=r.row+1,o.duang(o.reveal,o.holder.name),o.lastAct.push(o.holder.name+",move,trash,C"+o.holder.column+"R"+o.holder.row)),!0===o.holder.inFound()){var d=o.found["f"+o.holder.foundNo()];o.holder.column=r.column,o.holder.row=r.row+1,o.duang(d,o.holder),o.lastAct.push(o.holder.name+",move,"+o.holder.foundNo()+",C"+o.holder.column+"R"+o.holder.row)}return o.holding=!1,void(o.holder=void 0)}}if(!1===o.holding)o.holding=!0,o.holder=r}}(),o.render()},bottomClicked:function(e){var t=parseInt(e);if(!0===o.holding){var r=o.holder.row;if(13===o.holder.number&&0===o.columnHeight(t)){var n=[];n.push(o.holder);for(var a=o.holder.row+1;a<=17;a++){var s=o.getCardPos(o.holder.column,a);if(void 0===s)break;n.push(s)}var i="";for(a=0;a<n.length;a++)n[a].column=parseInt(t),n[a].row=a+1,a>0?i+=":"+n[a].name:i=n[a].name;!0===o.holder.inTrash()?o.lastAct.push(o.holder.name+",move,trash,C"+o.holder.column+"R"+o.holder.row):!0===o.holder.inFound()?o.lastAct.push(o.holder.name+",move,found,C"+o.holder.column+"R"+o.holder.row):o.lastAct.push(i+",move,C"+t+"R"+r+",C"+o.holder.column+"R"+o.holder.row),!0===o.holder.inTrash()&&o.duang(o.reveal,o.holder.name),!0===o.holder.inFound()&&o.duang(o.found["f"+o.holder.foundNo()],o.holder),o.holder=void 0,o.holding=!1,o.render()}}},topClicked:function(e){var t=parseInt(e);if(!isNaN(t)){var r=o.found["f"+t];if(!0===o.holding){if(!0===o.holder.inFound())return o.holding=!1,o.holder=void 0,void o.render();if(0===r.length)1===parseInt(o.holder.number)&&(!0===o.holder.inTrash()?o.lastAct.push(o.holder.name+",found,trash,"+t):o.lastAct.push(o.holder.name+",found,C"+o.holder.column+"R"+o.holder.row+","+t),o.holder.reset(),r.push(o.holder),o.holding=!1,o.holder=void 0,o.render());else{var n=r[r.length-1];o.holder.isOneHigher(n)&&o.holder.suit===n.suit&&void 0===o.getCardPos(o.holder.column,o.holder.row+1)&&(!0===o.holder.inTrash()?o.lastAct.push(o.holder.name+",found,trash,"+t):o.lastAct.push(o.holder.name+",found,C"+o.holder.column+"R"+o.holder.row+","+t),o.holder.reset(),r.push(o.holder),o.holding=!1,o.holder=void 0,o.render())}}else if(r.length>0){var a=r[r.length-1];o.holding=!0,o.holder=a,o.render()}}},takeBack:function(){if(console.log(o.lastAct),o.lastAct.length>0){var e=o.lastAct[o.lastAct.length-1].split(","),t=e[0];-1!==t.indexOf(":")&&(t=t.substring(0,t.indexOf(":")));var r=e[1],n=e[2];e[3];if("move"===r)if("trash"===n||1===n.length)console.log(o.trash),o.cards[t].reset(),"trash"===n?o.reveal.push(parseInt(t)):o.found["f"+n].push(parseInt(t)),o.lastAct.pop();else if(n.length>1){for(var a=n.indexOf("C"),s=n.indexOf("R"),i=o.cards[t].getColumn(),l=[],c=o.cards[t].row;c<=i.length;c++)l.push(i[c-1]);console.log("descend: "+l);var h=parseInt(n.substring(a+1,s)),d=parseInt(n.substring(s+1));for(c=d;c<d+l.length;c++)l[c-d].column=h,l[c-d].row=c;console.log("getting pos"),console.log(o.getCardPos(o.cards[t].column,o.cards[t].row-1)),void 0!==o.getCardPos(o.cards[t].column,o.cards[t].row-1)&&(o.getCardPos(o.cards[t].column,o.cards[t].row-1).show=!1),o.lastAct.pop()}if("trash"===r){if(o.reveal.length>0)o.trash.unshift(o.reveal.pop());else for(c=o.trash.length-1;c>=0;c--){var u=o.trash.pop();o.cards[u].show=!0,o.reveal.unshift(u)}o.lastAct.pop()}if("found"===r)if("trash"===n)o.cards[t].reset(),o.reveal.push(parseInt(t)),o.lastAct.pop();else{o.cards[t].reset();a=n.indexOf("C"),s=n.indexOf("R");void 0!==o.getCardPos(parseInt(n.substring(a+1,s)),parseInt(n.substring(s+1))-1)&&(o.getCardPos(parseInt(n.substring(a+1,s)),parseInt(n.substring(s+1))-1).show=!1),o.cards[t].column=parseInt(n.substring(a+1,s)),o.cards[t].row=parseInt(n.substring(s+1)),o.lastAct.pop()}}o.render(),o.holder=0,o.holding=!1},checkVictory:function(){var e=o.found;for(var t in e){var r=e[t];if(0===r.length)return!1;if(13!==r[r.length-1].number)return!1}n.setState({win:!0})}};return r.state={variables:o,win:!1,allColumnComponents:[],allFoundComponents:[],allRevealComponents:[],allTrashComponents:[]},r}return Object(p.a)(t,e),Object(c.a)(t,[{key:"retryGame",value:function(){this.setState({win:!1}),this.state.variables.init()}},{key:"setVar",value:function(e,t){var r=this.state.variables;r[e]=t,this.setState({variables:r})}},{key:"getVar",value:function(e){return this.state.variables[e]}},{key:"render",value:function(){for(var e=this,t=(this.state.variables,[]),r=1;r<=13;r++)for(var n=1;n<=4;n++){var o="cards/"+r+"_"+n+".png";t.push(a.a.createElement("img",{className:"preload",src:o,alt:"",key:r+":"+n}))}return this.state.win?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Congratulation! You beat the game!"),a.a.createElement("p",null,"Your time is: ",this.variables.time),a.a.createElement("button",{onClick:function(){return e.retryGame()}},"Retry")):a.a.createElement("div",{className:"App"},a.a.createElement(b,{setVar:function(t,r){return e.setVar(t,r)},getVar:function(t){return e.getVar(t)}}),a.a.createElement("div",{className:"preload"},t,a.a.createElement("img",{className:"preload",src:"cards/back.png",alt:"",key:0})),a.a.createElement("div",{id:"father"},a.a.createElement("div",{id:"top"},a.a.createElement(y,{trash:this.state.allTrashComponents,reveal:this.state.allRevealComponents,found:this.state.allFoundComponents,id:"foundation",setVar:function(t,r){return e.setVar(t,r)},getVar:function(t){return e.getVar(t)},cardComponent:j})),a.a.createElement(V,{data:this.state.allColumnComponents,id:"columns",setVar:function(t,r){return e.setVar(t,r)},getVar:function(t){return e.getVar(t)},cardComponent:j})))}}]),t}(a.a.Component);var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.31b9b22b.chunk.js.map