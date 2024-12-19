//---------------------------------//
/* Get the data from people.js     */
//---------------------------------//
// const xyz = require('./people');
// console.log(xyz);

//---------------------------------//
/* An example of destructuring     */
//---------------------------------//
const { people, ages } = require('./people');
console.log(people, ages);

//---------------------------------------//
/* This is built into the Node.js itself 
it is known as one of the core systems   */
//---------------------------------------//
const os = require('os');