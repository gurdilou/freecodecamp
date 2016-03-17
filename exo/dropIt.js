console.log("===== Drop it =====");

// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//
// Return the rest of the array, otherwise return an empty array.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
//     Arguments object
//
//     Array.shift()
//
//     Array.slice()

function drop(arr, func) {
  // Drop them elements.
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });

drop([1, 2, 3, 4], function(n) {return n >= 3;}); // should return [3, 4].
drop([0, 1, 0, 1], function(n) {return n === 1;}); // should return [1, 0, 1].
drop([1, 2, 3], function(n) {return n > 0;}); // should return [1, 2, 3].
drop([1, 2, 3, 4], function(n) {return n > 5;}); // should return [].
drop([1, 2, 3, 7, 4], function(n) {return n > 3;}); // should return [7, 4].
drop([1, 2, 3, 9, 2], function(n) {return n > 2;}); // should return [3, 9, 2]. 
