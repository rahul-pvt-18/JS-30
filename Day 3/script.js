//  Functions in JavaScript

function printCounting(n) { // function declaration
    for(let i=0;i<n;i++){
        console.log(i);
    }
}
printCounting(10);      // function calling
// JS has the concept of Hoisting that means all the function declaration are moved on the top of the JS page 

//  Function assignment (Named)
let stand = function walk(){ // Hoisting Doesn't work here
    console.log("Walking");
}// use stand() for function calling instead of walk()

// Un-Named Function Assignment
let UnNamed = function(){
    console.log("Unnamed Function");
}
// UnNamed()    calling of Un-named Function

// Parameters passed in the Function are saves as arguments  i.e Objects of JS (Number of parameters in JS is dynamic)

function sum(a,b){
    let total=0;
    for(let val of arguments){
        total+=val;
    }
    return total
}
// Can now provide any number of parameters as it would be saved as Arguments (object) in the function
console.log(sum(12,13));
console.log(sum(1,2,3,4,5));

// Rest operator 
// Must be last format argument
function printArgs(...args){
    console.log(args);      // args is a array here 
}
printArgs(1,2,3,4,5);

// Default Parameters 
function simpleInterst(p,r=10,y=1){ // Default params should be used from the last in the function signature
    return((p*r*y)/100);
}           // default params would be used if the user won't provide any value for them

console.log("Simple Interest of 1000 on 12% for 3 years: "+simpleInterst(1000,12,3));
console.log("Simple Interest of 1000 (Default params): "+simpleInterst(1000));

//  Getter-Setter
let person={
    // these values will serve as default value if no value is set before getting it !
    fName:"Rahul",
    lName:"Love",

    get fullName(){
        return `${this.fName}_ ${this.lName}`
    },
    set fullName(value){
        this.fName=value.split(' ')[0];
        this.lName=value.split(' ')[1];
    }
}

person.fullName='King Khan';
console.log(person);


//  Error Handling 
// (try-catch)

try {
    let x = anyNum+10;
} catch (error) {
    console.error("Error occurred:",error.message);
}finally{
    console.log("Execution complete");
    // this block of code will get execcuted even if there is an error or not, and it is written after the catch block 
}

// Scope of let, var and const 
// let has a local scope that is it is valid till the nearest code block 

// var has a scope in the function in which it is defined, and if it is not defined inside the function, then it is Global Scope

// Const has same as VAR

// Reducing an array 
let num = [1,2,3,4,5];
// reduce function reduce the array to a single value 
// let ans = num.reduce(function(total,current){
//     total+=current;
//     return total;
// })
// console.log(ans);
let x = num.reduce((accumulator=0,currentVal)=>accumulator+=currentVal,0);
console.log(x);