/*********************************************************************
** Author: Kendal Droddy
**
** Date: April 19, 2017
**
** Challenge: Write a function that takes two arguments, start and
** end, and returns an array containing all numbers from start up to
** (and including) end. Next, write a sum function that takes an 
** array of numbers and returns the sum of these numbers.
*********************************************************************/

//Range function
function range (start, end) {
  var list = [];
  for(var i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}

//Sum function
function sum (list) {
  var sum = 0;
  for(var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

//Use range function to populate an array
var numList = range(1, 10);

//Display the array's sum
console.log(sum(numList));