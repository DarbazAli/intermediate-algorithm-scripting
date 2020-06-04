/* 
    Sum All Primes
    A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    sumPrimes(10) should return 17.
    sumPrimes(977) should return 73156.
*/

const sumPrimes = num => {

    // check if num is prime
    function checkPrime(i) {
        for ( let j = 2; j < i; j++) {
            if ( i % j === 0) {
                return false;
            }
        }
        return true;
    }

    
    let sum = 0;
    for ( let i = 2; i <= num; i++) {
        if ( checkPrime(i) ) {
            sum += i;
        }
    }

    return sum;
}



console.log(sumPrimes(10));     // should return 17
console.log(sumPrimes(977));     // should return 73156

