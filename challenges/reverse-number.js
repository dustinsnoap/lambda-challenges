/*
Good morning! Write a function called reverseNumber that reverses a number.

Input Example: 
12345
555

Output Example:  
54321
555
*/
function reverseNumber(num) {
    //reverse only works on strings
    //convert to string
    num = String(num);
    //same method as reverse string
    //--split into char Array
    //--reverse array
    //--join back into string
    //parse back into int
    return parseInt(num.split("").reverse().join(""), 10)
}
console.log(reverseNumber(9035768));