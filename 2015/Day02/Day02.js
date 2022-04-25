//const input = require('./Day02inputTest.txt');
//part 1

//surface area = 2*l*w + 2*w*h + 2*h*l
//extra wrapping paper = area of smallest side

//return number - total square feet of wrapping paper

const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'Day02inputTest.txt'), 'utf8')
  .toString()
  .trim()
  .split(/\r\n/); //need \r\n because its a carriage return

console.log(input);

//NOTE make easier test data

//total area variable
//loop through array
//loop through each string/index in array - split at x to give l w h
//find smallest and store
//function to get area
//add smallest side - or have in above function?
//end of array index loop, add to total area variable
