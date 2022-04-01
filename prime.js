/**
 * prime no 
 */

var primeornot = num => {
  let n = 2;var a = 1;
  while (n < num ** 0.5 && a == 1) {
    if (num % n == 0) {
      console.log(num, " not a prime no");
      a = 0;
    }
    n++;
  }
  if (a == 1)
    console.log(num, " is a prime no");
}
// primeornot(71);
// primeornot(78);
// primeornot(91);
// primeornot(1);


/**
 *  Sieve Of Eratosthenes
 */

function prime(max,k){
    var isPrime = [];               //n
    for (var i = 0; i < max; i += 1) {   //n
      if (i != 0 && i != 1) {
        isPrime.push(true);
      }
      else {
        isPrime.push(false);
      }
    }
    for (var i = 0; i < max**0.5; i += 1) {         //log 2 n
      if (isPrime[i]) {
        for (var j = i + i; j < max; j += i) {      //log n
          isPrime[j] = false; 
        }
      }
    }
    var primes = [];                      //space = n
    for (var i = 0; i < max; i += 1) {   //n
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    return primes[4];
  }
console.log(prime(100,5));


//TC : n+n+log n + log 2n = nLogn
// SC : n+n = 2n = n