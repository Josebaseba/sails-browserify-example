var _  = require('lodash');
var io = require('./dependencies/sails.io.js')();
var React = require('react');
var Title = require('./react/title');

_.each([1,2,3,4,5], function(value){
  console.log(value);
});

console.log('Sails.sockets.io', io);

React.render(
  <Title />,
  document.getElementById('main-title')
);
