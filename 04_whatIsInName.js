/* 
    Wherefore art thou

    Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {

    // create a new array
    var arr = [];

    // get source keys
    let keys = Object.keys(source);
    
    // loop through collection
    collection.forEach(function(e) {
        if(keys.every(function(key) {return e[key] === source[key];})) {
          arr.push(e);
        }
    });
    

    return arr;
}

  
