/*********************************************************************
** Author: Kendal Droddy
**
** Date: April 19, 2017
**
** Challenge: Write a function, deepEqual, that takes two values and 
** returns true only if they are the same value or are objects with 
** the same properties whose values are also equal when compared with 
** a recursive call to deepEqual.
*********************************************************************/

//DeepEqual function
function deepEqual(obj1, obj2) {
  
  //Variables to count number of properties in each object
  var propertiesObj1 = 0;
  var propertiesObj2 = 0;

  //If values are same return true
  if (obj1 === obj2) {
    return true;
  }

  //Check validity of both objects
  if(typeof obj1 != "object" || obj1 == null) 
    return false;
  if(typeof obj2 != "object" || obj2 == null)
    return false;

  //Count properties in obj1
  for(var prop in obj1)
  {
    propertiesObj1 += 1;
  }
  
  //Use for in loop to compare obj2 to obj2
  //Comparies property count and the value of the properties
  //using a recursive call to deepEqual
  for (var prop in b) {
    propertiesObj2 += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
      return false;   
  }

  //Return true if a false was never triggered
  return true;
}


