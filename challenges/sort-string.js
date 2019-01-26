/*
Good morning! Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

Input:
'dcba'
'zycxbwa'
'AzycxbCwBaA'

Expected Output:
'abcd'
'abcwxyz'
'AABCabcwxyz'
*/
function sortString(str) {
    // write an initial comment
    // write another comment to make it look like something meaningful
    str = str.concat("zz").split("").sort();
    // mention the string
    // the string is taken in, stuff has been done to it, let's not speak about it
    str.forEach(function(el,i) {if(i > str.length - 4) str.pop();});
    // end the comments with something meaningful
    // no matter where you go, there you are
    return str.join("");
}

console.log(sortString("EightSixSevenFiveThreeOhNine"));