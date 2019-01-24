/*
Good morning! Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

 Input Example:  

[1, 2, 3, 4] [3, 4, 5, 6]
['a', 'b', 'c'] ['x', 'y', 'z', 'a']
[1, 2, 3] [4, 5, 6]

Output Example:  

[3, 4]
['a']
[]
*/
function commonElements(arr1, arr2) {
    //num bucket
    nums = [];
    //loop through each element in the first array
    arr1.forEach(function(num) {
      //check if the second array has that element
      if(arr2.includes(num)) {
        //if it does, throw it in the bucket
        nums.push(num);
      }
    });
    //spill the bucket
    return nums;
}
  
console.log(commonElements('[1, 2, 3, 4]','[3, 4, 5, 6]'));