console.log("===== Finders Keepers =====");

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
//     Array.filter()

function find(arr, func) {
  var num = 0;

  arr = arr.filter(func);

  if(arr.length === 0){
    console.log("result : undefined");
    return undefined;
  }
  console.log("result : "+arr[0]);
  return arr[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // should return 8.
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // should return undefined.
