/*********************************************************************
** Author: Kendal Droddy
**
** Date: April 18, 2017
**
** Challenge: Write a program that uses console.log to print all the
** numbers from 1 - 100 with two exceptions. For numbers divisible
** by 3, print "Fizz" and for numbers divisible by 5 (and not 3),
** print "Buzz" instead. Print "FizzBuzz" for numbers divisible by
** both 3 and 5.
*********************************************************************/

//Loop from 1 to 100
for(var i = 1; i <= 100; i++) {

  if (i % 15 == 0) { 
    console.log("FizzBuzz");
  } 
  else if (i % 3 == 0) {
    console.log("Fizz");  
  } 
  else if (i % 5 == 0) {
    console.log("Buzz");
  } 
  else
    console.log(i);
}