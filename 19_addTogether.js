/* 
    Arguments Optional
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

    If either argument isn't a valid number, return undefined.

    addTogether(2, 3) should return 5.
    addTogether(23, 30) should return 53.
    addTogether(5)(7) should return 12.
    addTogether("http://bit.ly/IqT6zt") should return undefined.
    addTogether(2, "3") should return undefined.
    addTogether(2)([3]) should return undefined.
*/

const addTogether = () => {

    let a = arguments[0];
    // check if input is number
    const checkNum = (arg) => toString.call(arg) === '[object Number]';

    // return if a is not a number
    if ( !checkNum(a) ) { return }

    // check if we have 1 input
    if ( arguments.length === 1) {
        return function(b) {
            if ( !checkNum(b) ) { return }
            return a + b;
        }
    }

    let b = arguments[1];
    if ( !checkNum(b) ) { return };
    return a + b;

}






