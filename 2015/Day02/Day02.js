//const input = require('./Day02inputTest.txt');
//part 1

//surface area = 2*l*w + 2*w*h + 2*h*l
//extra wrapping paper = area of smallest side

//return number - total square feet of wrapping paper

const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'Day02input.txt'), 'utf8')
  .toString()
  .trim()
  .split(/\r\n/); //need \r\n because its a carriage return

const getSurfaceArea = (w, l, h) => {
  const sides = [2 * l * w, 2 * w * h, 2 * h * l];
  return (
    sides[0] + sides[1] + sides[2] + Math.min(sides[0], sides[1], sides[2]) / 2
  );
};

const getTotalSurfaceArea = (array) => {
  let totalSurfaceArea = 0;
  for (let i = 0; i < array.length; i++) {
    let sides = array[i].split('x');
    let width = sides[0];
    let length = sides[1];
    let height = sides[2];
    totalSurfaceArea = totalSurfaceArea + getSurfaceArea(width, length, height);
  }
  return totalSurfaceArea;
};

console.log(getTotalSurfaceArea(input));

//part 2
