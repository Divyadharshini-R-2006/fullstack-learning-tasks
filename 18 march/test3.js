Coding:
let a=10;
let b=20;
// named function
function sum(a,b){
    return a+b;
}
console.log(sum(a,b));

Output:30

// anonymous function
const sum=function(a,b){
    return a+b;
}
console.log(sum(a,b));

Output:30

// arrow function
const sum=(a,b)=>a+b;

Output:30

Challenge:
const sum=x,y=>{
     x+y;
}
console.log(sum(x,y));

Output:
SyntaxError: Missing initializer in const declaration

*) I was tried to remove these parantheses around (a,b) it throws SyntaxError.
*) Because it contains two parameters so, we must use parantheses around these parameters.