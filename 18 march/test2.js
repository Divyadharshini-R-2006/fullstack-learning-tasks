Coding:
const nums=[1,2,3,4];
let number=nums.map((i)=>{
    if(i%2==0){
        return i*2;
    }
    else{
        return i*3;
    }
});
console.log(number);

Output:
[ 3, 4, 9, 8 ]

*) The above program using if condition to check if the num is odd or even inside the map function.
*) If the number is even print the number multiplied by 2.
*) Otherwise print the number multiplied by 3.


Challenge:
let call=nums.map(($,b)=>{
return b;
});
console.log(call);

Output:
[ 0, 1, 2, 3 ]

*) I saw the output of the above coding is it returns the current index of the elements.
*) map function return 3 output that are =>[current element,current index,array] it skip the first value because i used underscore to skiped the current element.so it returns the second value (current index).