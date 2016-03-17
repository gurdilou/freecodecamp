console.log("===== Sum primes =====");

function sumPrimes(num) {
  var result = 0;
  for(var i = 2;  i <= num; i++){
    if(isPrime(i)){
      result += i;
    } 
  }

  console.log("result : "+result);
  return result;
}

function isPrime(number) {
  var isPrime = true;
  var i = 2;
  while( (i < number) && isPrime ){
    if(number % i === 0){
      isPrime = false;
    }

    i++;
  }
  if(isPrime){
    console.log("isPrime : "+number);
  }

  return isPrime;
}

sumPrimes(10);
