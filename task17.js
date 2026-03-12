// let variable(Block scoped)
    let a=5;{
    console.log("a value is: "+a);
    }

// const variable(Block scoped)
{
    const b=8;
    console.log("b value is: "+b);
}

// var variable(Function scoped)
{
    var c=10;
}
    console.log("c value is: "+c);