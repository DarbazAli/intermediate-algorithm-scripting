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



## 08)  DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


```javascript
const pairElement = str => {
    let pairs = [];
    let chars = str.split('');

    for( let i = 0; i < chars.length; i++) {
        let elem = chars[i]
        if ( elem === "C") {
            pairs.push(["C", "G"])
        }

        if ( elem === "G") {
            pairs.push(["G", "C"])
        }

        if ( elem === "A" ) {
            pairs.push(["A", "T"])
        }

        if ( elem === "T" ) {
            pairs.push(["T", "A"])
        }
        
    }
    return pairs;
}


console.log(pairElement('ATCGA'));  // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement('TTGAG'));  // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
```


## 09)  Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

**fearNotLetter("abce") should return "d".**
**fearNotLetter("abcdefghjklmno") should return "i".**
**fearNotLetter("stvwx") should return "u".**
**fearNotLetter("bcdf") should return "e".**
**fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.**

```javascript
const fearNotLetter = str => {

    for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
        
        var letter = String.fromCharCode(i);
        if (str.indexOf(letter) === -1) {
          return letter;
        }
      }

   return undefined;
}


console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
```


## 10)  Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

**uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].**
**uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].**
**uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].**

```javascript
const uniteUnique = arr => {
    // grab all args and covert to array
    let args = [].slice.call(arguments); 

    // flat the array
    let array = args.flat();

    // filter the array for uniqe values
    return [...new Set(array)];
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
```

## 11) Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

**convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".**
**convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".**
**convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".**
**convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".**
**convertHTML("Schindler's List") should return "Schindler&apos;s List".**
**convertHTML("<>") should return "&lt;&gt;".**
**convertHTML("abc") should return "abc".**


```javascript
const convertHTML = (str) =>  {

    // possible entities
    var MAP = { 
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    return str.replace(/[&<>"']/g, function(c) {
      return MAP[c];
    });
  }


  console.log(convertHTML("Dolce & Gabbana"));  // "Dolce &amp; Gabbana"
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));   // "Hamburgers &lt; Pizza &lt; Tacos"
  console.log(convertHTML("<>"));   // "&lt;&gt;"
```



## 12)  Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

**sumFibs(1) should return a number.**\
**sumFibs(1000) should return 1785.**\
**sumFibs(4000000) should return 4613732.**\
**sumFibs(4) should return 5.**\
**sumFibs(75024) should return 60696.**\
**sumFibs(75025) should return 135721.**\


```javascript
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
```