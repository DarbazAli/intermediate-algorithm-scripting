/* 
    Seek and Destroy

    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

    Note
    You have to use the arguments object.
*/

const destroyer = (arr) => {

    // change all args into array
    let args = [...arguments];

    // remove args from array
    args.splice(0, 1);
    
    // filter the array
    return arr.filter(function (value) {
        return args.indexOf(value) === -1
    });
    
}


console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

