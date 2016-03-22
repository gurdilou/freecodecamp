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

//noprotect
function smallestCommons(arr) {
  var result = 0;

  fillArray(arr);

  var found = false;
  var number = arr[arr.length - 1];
  var i = 0;
  while(!found && i < 10000000) {
    if(isNumberIsOkay(arr, number)){
      found = true;
    }else{
      number++;
    }
    i++;
  }

  result = number;
  console.log("result : "+result);
  return result;
}

//vérifie si le nombre est bon
function isNumberIsOkay(arr, number) {
  var isValid = true;
  var i = 0;
  while(isValid && (i < arr.length)){
    var valueTested = arr[i];

    if (number % valueTested !== 0) {
      // console.log("Nb non valide : "+number+' / '+valueTested);
      isValid = false;
    }

    i++;
  }

  return isValid;
}

// Prépare le tableau comme il faut
function fillArray(arr) {
  if(arr[0] > arr[1]) {
    var tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
  }

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


smallestCommons([1, 13]); // should return a number.
