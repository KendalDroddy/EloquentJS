/*********************************************************************
** Author: Kendal Droddy
**
** Date: April 19, 2017
**
** Challenge: Write a function that takes two arguments and returns
** their minimum.
*********************************************************************/

function minimum(x, y) {
  if(x < y)
    return x;
  else
    return y;
}

//Display minimum
var min = minimum(112, 50);
console.log(min);