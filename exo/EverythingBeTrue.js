console.log("===== Everything Be True =====");

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
// Remember, you can access object properties through either dot notation or [] notation.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code

function every(collection, pre) {
  var result = true;

  var i = 0;
  while(result && i < collection.length) {
    var obj = collection[i];

    if(! objMatchPredicate(obj, pre)){
      result = false;
    }
    i++;
  }

  console.log("result : "+result);
  return result;
}

function objMatchPredicate(obj, pre){
  var result = false;
  if(obj.hasOwnProperty(pre)){
    if(obj[pre]){
      result = true;
    }
  }
  return result;
}


every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // should return true.
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // should return false.
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); // should return false.
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); // should return false
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); // should return true
every([{"single": "yes"}], "single"); // should return true
every([{"single": ""}, {"single": "double"}], "single"); // should return false
every([{"single": "double"}, {"single": undefined}], "single"); // should return false
every([{"single": "double"}, {"single": NaN}], "single"); //should return false
