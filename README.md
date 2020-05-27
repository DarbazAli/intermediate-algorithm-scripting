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

Note
You can return the array with its elements in any order.


    const diffArray = ( arr1, arr2 ) => {
    return arr1.concat(arr2)
        .filter( item => !arr1.includes(item) || 
            !arr2.includes(item));
    }

    let arr1 = [1, 2, 3, 5];
    let arr2 = [1, 2, 3, 4, 5];

    console.log(diffArray(arr1, arr2))  // 4