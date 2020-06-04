/* 
    Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    smallestCommons([1, 5]) should return a number.
    smallestCommons([1, 5]) should return 60.
    smallestCommons([5, 1]) should return 60.
    smallestCommons([2, 10]) should return 2520.
    smallestCommons([1, 13]) should return 360360.

*/

function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
    arr.sort(function(a,b) {return a-b;});
    var rng = [];
    for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
    }
    return rng.reduce(lcm);
}


console.log(smallestCommons([5, 1]));
console.log(smallestCommons([1, 13]));