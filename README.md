# Intermediate Algorithm Scripting Challenges

## 01)  Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


    // Procedural Approach;
    const sumAll = arr => {

        let min;
        let max;
        let sum = 0;

        // sort the array
        if ( arr[0] > arr[1]) {
            min = arr[1];
            max = arr[0]
        } else {
            min = arr[0];
            max = arr[1];
        }


        // generate the range
        for (let i = min; i <= max; i++) {
            sum += i;
        }

        return sum;
    }



    // Functional Approach
    function sumAllFunc(arr) {
        var sum = 0;
        arr.sort(function(a,b) {return a-b;});
        for (var i = arr[0]; i <= arr[1]; i++) {
        sum += i;
        }
        return sum;
    }

    console.log(sumAll([1, 4]));    // 10
    console.log(sumAll([4, 1]));    // 10
    console.log(sumAll([0, 0]));    // 0

    console.log(sumAllFunc([0, 0]));    // 0


## 02) Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

**Note**
You can return the array with its elements in any order.


    const diffArray = ( arr1, arr2 ) => {
    return arr1.concat(arr2)
        .filter( item => !arr1.includes(item) || 
            !arr2.includes(item));
    }

    let arr1 = [1, 2, 3, 5];
    let arr2 = [1, 2, 3, 4, 5];

    console.log(diffArray(arr1, arr2))  // 4


## 03) Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

**Note**
You have to use the arguments object.

``` javascript
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
```



## 04) Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


```javascript
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
```


## 05) Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

```javascript
const spinalCase = str =>  str.replace(/([a-z])([A-Z])/g, `$1-$2`).replace(/\s+|_+/g, `-`).toLowerCase();

console.log(spinalCase("This Is Spinal Tap")) 
console.log(spinalCase("thisIsSpinalTap")) 
console.log(spinalCase("The_Andy_Griffith_Show")) 
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
```


## 06) Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

```javascript
const translatePigLatin = str => {
    
    // if the word begins with vowel, jsut add "way" at the end
    if ( str.match(/^[aeiou]/) ) {
        return str += "way";
    }

    // if it was all constant, add ay to the end
    else if ( !str.match(/[aeiou]/) ) {
        return str += "ay";
    }

    // if it starts with constant
    else if ( !str.match(/^[aeiou]/)) {

        // copy the original string
        let newStr = str.slice();

        // get first constant cluster
        let firstConst = [];
        for ( let i = 0; i < newStr.length; i++) {

            let char = newStr[i];
            if ( char.match(/[^aeiou]/)) {
                firstConst.push(char)
            }
            if ( char.match(/[aeiou]/)) {
                break;
            }
            
        }

        let firstClust = firstConst.join('');
        let result = newStr + firstClust + "ay";
        return result.replace(firstClust, '' );
    }
}


console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("california"));   //aliforniacay
console.log(translatePigLatin("glove"));   //oveglay
```



## 07) Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

```javascript
const searchAndReplace = ( str, before, after ) => {
    
    // if "before" is titlecase, make "after" titlecase also
    if ( /[A-Z]/.test(before.charAt(0))) {
       after = after.charAt(0).toUpperCase() + after.slice(1);
    }

    // turn "before" into search pattern
    let regEx = new RegExp(before, 'g');
    // replace the pattern with provided string
    return str.replace(regEx, after);
}

console.log(searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

```