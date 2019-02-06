/*
Good morning! Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:

toBinaryString(6) should return "110" (no leading 0).

Use of the native method number.toString(2);  is disallowed.

console.log(toBinaryString(0));  // <--- 0
console.log(toBinaryString(1));  // <--- 1
console.log(toBinaryString(2));  // <--- 10
console.log(toBinaryString(3));  // <--- 11
console.log(toBinaryString(4));  // <--- 100
console.log(toBinaryString(5));  // <--- 101
console.log(toBinaryString(6));  // <--- 110
console.log(toBinaryString(7));  // <--- 111
console.log(toBinaryString(8));  // <--- 1000
console.log(toBinaryString(9));  // <--- 1001
console.log(toBinaryString(10)); // <--- 1010
console.log(toBinaryString(11)); // <--- 1011
console.log(toBinaryString(12)); // <--- 1100
console.log(toBinaryString(13)); // <--- 1101
console.log(toBinaryString(14)); // <--- 1110
console.log(toBinaryString(15)); // <--- 1111
console.log(toBinaryString(16)); // <--- 10000

Count from 0 to 31 in binary with one hand: https://youtu.be/Bke95oWWZII

Remainder division with the modulo operator %
*/
function toBinaryString(iveBecomeSoNum) {
    let iCantFeelYouArr = []
      while(iveBecomeSoNum !== 0) {
          iveBecomeSoNum % 2 === 0 ? iCantFeelYouArr.unshift(0) : iCantFeelYouArr.unshift(1)
          iveBecomeSoNum = Math.floor(iveBecomeSoNum/2)
      }
      return !iCantFeelYouArr.length ? `0` : iCantFeelYouArr.join('')
  }