console.log("===== Smallest Common multiples =====");

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
//     Smallest Common Multiple


function smallestCommons(arr) {
  var result = 0;

  fillArray(arr);




  console.log("result : "+result);
  return result;
}

// Prépare le tableau comme il faut
function fillArray(arr) {
  var length = arr.length;
  for(var i = 1; i < length; i++){
    var prvs = arr[i-1];
    var curr = arr[i];


    if(curr !== (prvs+1) ){
      arr.splice(i, 0, prvs+1);
      length = arr.length;
    }
  }
  console.log("fillArray : "+arr);
}


smallestCommons([1, 5]); // should return a number.
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
