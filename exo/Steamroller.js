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
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);


// steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
