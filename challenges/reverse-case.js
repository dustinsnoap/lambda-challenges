/*
Good morning! Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

const string = 'HELLO world!';
console.log(reverseCase(string)); // <--- hello WORLD!
*/
//touch it
function reverseCase(str) {
    //bring it
    //split it
    str = str.split('');
    //watch it
    for(let i=0; i<str.length; i++) {
      //turn it
      str[i].match(/[a-z]/) ? str[i] = str[i].toUpperCase() : str[i] = str[i].toLowerCase();
    }
    //leave it
    //stop
    
    //format it
    return str.join('');
}
console.log(reverseCase("aBcDeFgHiJkLmNoPqRsTuVwXyZ"));