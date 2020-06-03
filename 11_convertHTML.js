/* 
    Convert HTML Entities
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

    convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
    convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
    convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
    convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
    convertHTML("Schindler's List") should return "Schindler&apos;s List".
    convertHTML("<>") should return "&lt;&gt;".
    convertHTML("abc") should return "abc".

*/

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
  