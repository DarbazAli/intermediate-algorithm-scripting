/* 
    Spinal Tap Case

    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

    spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
    spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
    spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
    spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
    spinalCase("AllThe-small Things") should return "all-the-small-things".

*/


const spinalCase = str =>  str.replace(/([a-z])([A-Z])/g, `$1-$2`).replace(/\s+|_+/g, `-`).toLowerCase();




console.log(spinalCase("This Is Spinal Tap")) 
console.log(spinalCase("thisIsSpinalTap")) 
console.log(spinalCase("The_Andy_Griffith_Show")) 
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))