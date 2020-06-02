/* 
    Pig Latin
    Pig Latin is a way of altering English Words. The rules are as follows:

    - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    - If a word begins with a vowel, just add "way" at the end.
*/


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


