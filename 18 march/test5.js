// arrow function
let arr=[1,2,3,4,5];
let num=arr.map((e,j)=>{
console.log("Element in position " + j +  ":" + e);
});

output:
Element in position 0:1
Element in position 1:2
Element in position 2:3
Element in position 3:4
Element in position 4:5
*) In this program am use map function to loop the array elements.
*) In map function takes arrow function as parameter.
*) j prints the current index because it is a 2nd parameter.
*) e prints the current element because it is a 1st parameter.

Challenge:
// named function
arr.map(function arr(e,j){
console.log("Element in position " + j +  ":" + e);
});
Output:
Element in position 0:1
Element in position 1:2
Element in position 2:3
Element in position 3:4
Element in position 4:5

// anonymous function
let num=arr.map(function arr(e,j){
console.log("Element in position " + j +  ":" + e);
});
Output:
Element in position 0:1
Element in position 1:2
Element in position 2:3
Element in position 3:4
Element in position 4:5