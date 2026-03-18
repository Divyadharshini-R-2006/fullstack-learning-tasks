Coding:
let colors=["Red","Blue"];
colors.push("Green");
console.log(colors);
colors=["Yellow"];
console.log(colors);

Output:
[ 'Red', 'Blue', 'Green' ]
*) In first I was tried to push new element to the exist array.so it was worked.

Challenge:
*) But in second I tried to reassign the variable so it throws typeerror,because it store only it's referece not a value.
*) And tried to reassign to const variable so it throws an error. 