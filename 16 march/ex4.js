const colors = ["red", "blue"];
colors.push("green");
console.log(colors);
colors[0] = "yellow";
console.log(colors);
colors = ["black"];
console.log(colors);

// *)6th line throws UNDEFINED.
// *)Because we tried to assign the elements to a const variable.
// *)It does not support to change the array it only support to change the elements.