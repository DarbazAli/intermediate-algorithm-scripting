/* 
    Binary Agents
    Return an English translated sentence of the passed binary string.

    The binary string will be space separated.

    binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/
const binaryAgent = str => 
    str.split(' ')
    .map(function(s) { return parseInt(s, 2); })
    .map(function(b) { return String.fromCharCode(b);})
    .join('');




console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));    // I love FreeCodeCamp!





  
