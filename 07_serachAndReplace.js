/* 
    Search and Replace
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

*/

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
