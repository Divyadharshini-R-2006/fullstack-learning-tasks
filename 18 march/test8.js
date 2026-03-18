Coding:
let grade;
switch("A"){
    case "A":
        console.log("Excellent");
    case "B":
        console.log("Good");
}

output:
Excellent
Good

Challenge:
*) The above switch program prints the both statement.
*) Because there was no break statement,it is commonly used to print the matching case only and terminated.
*) So it execute the statement-Good after the matching case.