
// let type of variable will be changed
let message = "Hello World";
console.log(message);


// Constant cannot be changed
const msg = "This is constant";
console.log(msg);

//var type of variable also changed.
var a = 10, b = 5;
console.log(a);
console.log(b);

//Note: Take care of scope of variable while using the variables.
// Var type has no block scope.

if(a > b) {
    console.log("Inside Block");

    let address = "Padra";
    console.log(address); // correct

    var city = "Baroda";
    //console.log(city);
}

//console.log(address);    // Incorrect let variable scope limit is upto that block.
console.log(city);     // Correct because var has no block scope.

var x = 10;
var x = 20;
console.log(x);
console.log(x); // so var type of variable has no duplicate variable it will overide the value.

let z = 10;
//let z = 20;   // Cannot create the same name variable using let variable type.
console.log(z);
console.log(z);

// naming rules of the variables
/*
    1.Starts with alphabates, not with number.
    2.Name must contain letters, digits, symbols and "$" and _underscore.
    3.Keyword name should not be the name of the variable name.
*/