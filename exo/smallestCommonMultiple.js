console.log("===== Smallest Common multiples =====");

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


smallestCommons([1,5]);
