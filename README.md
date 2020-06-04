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


## 13) Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

**sumPrimes(10) should return 17.**\
**sumPrimes(977) should return 73156.**


```javascript
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
```


## 14) Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

**smallestCommons([1, 5]) should return a number**\
**smallestCommons([1, 5]) should return 60**\
**smallestCommons([5, 1]) should return 60**\
**smallestCommons([2, 10]) should return 2520**\
**smallestCommons([1, 13]) should return 360360**

```javascript
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
```


## 15) Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

**dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].**\
**dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].**


```javascript
const dropElements = ( arr, func ) => {
    while ( !func(arr[0])) {
        arr.shift();
    }

    return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
```


## 16) Steamroller
Flatten a nested array. You must account for varying levels of nesting.

```javascript
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

console.log(steamrollArray([1, [2], [3, [[4]]]]));  // [1, 2, 3, 4]
```


## 17) Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

**binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"**


```javascript
const binaryAgent = str => 
    str.split(' ')
    .map(function(s) { return parseInt(s, 2); })
    .map(function(b) { return String.fromCharCode(b);})
    .join('');




console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));    // I love FreeCodeCamp!
```



## 18) Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

**console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));  // => true**

```javascript
const truthCheck = (collection, pre) => {
    return collection.every( item => item[pre]);
}


console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));  // => true
```


## 19) Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

If either argument isn't a valid number, return undefined.

**addTogether(2, 3) should return 5.**\
**addTogether(23, 30) should return 53.**\
**addTogether(5)(7) should return 12.**\
**addTogether("http://bit.ly/IqT6zt") should return undefined.**\
**addTogether(2, "3") should return undefined.**\
**addTogether(2)([3]) should return undefined.**


```javascript
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
```


## 20) Make a Person
    
**getFirstName()**\
**getLastName()**\
**getFullName()**\
**setFirstName(first)**\
**setLastName(last)**\
**setFullName(firstAndLast)**


```javascript
function Person(firstAndLast) {
    
    let fullName = firstAndLast;
    let splitName = fullName.split(' ');

    // get first and last
    this.getFirstName = function() {
        return splitName[0];
    }
    this.getLastName = function() {
        return splitName[1];
    }


    // set first and last anme
    this.setFirstName = function(first) {
        splitName[0] = first;
    }

    this.setLastName = function(last) {
        splitName[1] = last;
    }

    // get full name
    this.getFullName = function(fullName) {
        return `${this.getFirstName()} ${this.getLastName()}`
    }

    // set full anme
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        splitName = fullName.split(" ");
    }

}

const bob = new Person("Bob Ross")
bob.setFullName("Heskell Ross")

console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
```