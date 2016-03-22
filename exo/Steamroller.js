console.log("===== Steamroller =====");

// Flatten a nested array. You must account for varying levels of nesting.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
//     Array.isArray()
//

function steamroller(arr) {
  console.log("steam rolling : "+JSON.stringify(arr));
  var result = [];
  // I'm a steamroller, baby
  if (Array.isArray(arr)){
    for(var i = 0; i < arr.length; i++){
      var childResult = steamroller(arr[i]);
      if(childResult.length > 0){
        result = result.concat( childResult );
        console.log("itere result : "+JSON.stringify(result));
      }
    }
  }else{
    result.push(arr);
  }

  console.log("result : "+JSON.stringify(result));
  return result;
}

// steamroller([1, [2], [3, [[4]]]]);
steamroller([[["a"]], [["b"]]]); // should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]); // should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4].
