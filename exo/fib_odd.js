console.log("===== Odd fibonnaci ====="); 

function sumFibs(num) {

  var buffer = [0, 1];
  var listFib = [];
  var result = 1;
  console.log("ajout de "+result);

  var i = 0;
  var currentFib = 0;
  while (currentFib < num){
    currentFib = buffer[0] + buffer[1];
    console.log("currentFib : "+currentFib);

    if(currentFib < num){
      buffer[0] = buffer[1];
      buffer[1] = currentFib;

      // console.log("i : "+i+", currentFib : "+currentFib+", buffer : "+JSON.stringify(buffer));

      if(currentFib % 2 === 1){
        result += currentFib;
      }
    }
  }

  console.log("result : "+result);
  return result;
}

sumFibs(1000);
