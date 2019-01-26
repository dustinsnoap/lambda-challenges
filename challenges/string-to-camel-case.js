/*
Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"
toCamelCase("The_stealth_warrior")
// returns "TheStealthWarrior"
*/
function toCamelCase(str) {
    //convert to array
    str = str.split('');
    //look through array
    for(let i=0; i<str.length; i++) {
      //test for - and _
      if(str[i] == '-' || str[i] === '_') {
        //remove if found
        str.splice(i, 1);
        //uppercase next char
        str[i] = str[i].toUpperCase();
      }
    }
    //get out!
    return str.join('');
  }

  console.log(toCamelCase("to-camel_case"));