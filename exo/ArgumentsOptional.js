console.log("===== Arguments Optional =====");


// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, add(2, 3) should return 5, and add(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = add(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
//     Closures
//
//     Arguments object


function add() {
  // for (var i = 0; i < arguments.length; i++) {
  //   var arg = arguments[i];
  //   console.log("arg : "+arg);
  // }
  var valid = true;
  var i = 0;
  while(valid && i < arguments.length) {
    if(typeof(arguments[i]) !== "number"  ){
      valid = false;
    }
    i++;
  }
  if(!valid){
    console.log("result : undefined");
    return undefined;
  }else{
    var result = arguments[0];

    if (arguments.length === 1) {
      var sumAfter = function (toAdd) {
        if(typeof(arguments[0]) !== "number"){
          return undefined;
        }
        console.log("sumAfter : "+(result + toAdd));
        return result + toAdd;
      }
      console.log("result = func");
      return sumAfter;
    }else{
      console.log("result : "+result);
      return result + arguments[1];
    }
  }
}


add(2, 3); // should return 5.
var a = add(2);
a(3); // should return 5.
add("http://bit.ly/IqT6zt"); //should return undefined.
add(2, "3"); //should return undefined.
var b = add(2);
b([3]); // should return undefined.
