/* 
    Sum All Odd Fibonacci Numbers
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

    sumFibs(1) should return a number.
    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.

*/


const sumFibs = num => {

    var a = 1;
    var b = 1;
    var s = 0;
    while (a <= num) {
        if (a % 2 !== 0) {
        s += a;
        }
        a = [b, b=b+a][0];
    }
    return s;
}


console.log(sumFibs(10));   // 10
console.log(sumFibs(1));    // 2
console.log(sumFibs(1000)); // 1785


