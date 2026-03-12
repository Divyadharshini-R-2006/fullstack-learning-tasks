const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,1];
// push element
arr1.push(6);
console.log("Array after push ele:",arr1);
// pull element
arr2.pop();
console.log("Array after pop ele:",arr2);
// unshift element
arr2.unshift(0);
console.log("Array after unshift ele:",arr2);
// shift element
arr1.shift();
console.log("Array after shift ele:",arr1);
// index
console.log("Element of 5 is: "+(arr1.indexOf(5)));
// includes
console.log("The element 0 is exist: "+(arr2.includes(0)));
// join array
console.log(("Array join by space: "+arr1.join(" ")));
console.log(("Array join by plus: "+arr2.join("+")));
// reverse element
console.log(("Reverse of arr1 is: "+arr1.reverse()));
console.log(("Reverse of arr2 is: "+arr2.reverse()));
// sort element
console.log(("Sort of arr1 is: "+arr1.sort()));
console.log(("Sort of arr2 is: "+arr2.sort()));
// slice element
console.log("Slice of arr1 is: ",arr1.slice(1,4));
console.log("Slice of arr2 is: ",arr2.slice(0,5));
// for loop of array
const array=[5,6,7,8,9];
for(let i=0;i<array.length;i++){
    console.log("for loop: "+array[i]);
}
// for of loop
for(let ele of array){
    console.log("for of loop: "+ele);
}
// map function
array.map((a,b,c)=>{
    console.log(a,b,c);
})
// for each loop
array.forEach((a,b)=>{
    console.log(a,b);
})