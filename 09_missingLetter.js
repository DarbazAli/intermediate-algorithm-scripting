/* 
    Missing letters
    Find the missing letter in the passed letter range and return it.

    If all letters are present in the range, return undefined.

    fearNotLetter("abce") should return "d".
    fearNotLetter("abcdefghjklmno") should return "i".
    fearNotLetter("stvwx") should return "u".
    fearNotLetter("bcdf") should return "e".
    fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/


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