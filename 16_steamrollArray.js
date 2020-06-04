
/* 
    Steamroller
    Flatten a nested array. You must account for varying levels of nesting.
*/

const steamrollArray = arr => {

    let flatArr = [];
    flatten(arr);

    function flatten(arr) {
        arr.forEach(element => {
            if ( !Array.isArray(element )) {
                flatArr.push(element)
            }
            else {
                flatten(element)
            }
        })
    }
    
    return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
