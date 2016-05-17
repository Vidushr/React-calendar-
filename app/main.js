var React = require('react');
var ReactDOM = require('react-dom');
var CalendarReact = require('./CalendarReact');
var Moment = require ('moment')

//setTimeout(function(){
 ReactDOM.render(<CalendarReact selected={Moment().startOf("day")} />, document.body)//},100);



