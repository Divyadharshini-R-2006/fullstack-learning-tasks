const nums = [1, 2, 3, 4];
const ret=nums.map((e)=>{
    if(e%2==0){
        return e*2;
    }
    else{
        return e*3;
    }
});
console.log(ret);