// in this file, we will keep the code that builds the HTML table, and fills it with the data from data.js file.

// import the data from data.js
const tableData=data;

// note: D3 is a javascript library that allows for HRML webpage graphics. used for dashboards or visual data
// reference the HTML table using d3.select tells javascript to go to HTML and search for "tbody" tags. then assign to variable tbody
var tbody = d3.select("tbody");

// simple javascript console.log statement
function printHello(){
    console.log("Hello there!");
};

// function with arguements passed into it.
// take two number and add them
function addition (a, b){ // a and b are referred to as "parameters". generally, its best to not have too many parameters, otherwise the code may run slowly or crash
    return a+b;
};

console.log(addition(4, 5))

// functions can call other functions:
// create a function called doubleAddition, that adds two numbers together then doubles (multiply by 2) it.
function doubleAddition(c, d){
    var total = addition(c, d)*2;
    return total;
}


// arrow functions. nameless functions, intended to only be used once.

// without using arrow/fat arrow notation:
function square(num){
    return num **2;
}

// with using arrow/fat arrow notation: (note that "square" is the name of a variable, not a functio name)
let square = (num) => num**2;

// another arrow function example:
addition= (a,b) => a+b;