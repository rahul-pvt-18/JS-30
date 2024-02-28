// Math random 
console.log(Math.random());

// pi value 
console.log(Math.PI);

// max and min of the numbers (takes only numbers no array)
console.log(Math.max(5,9,15,67,82,12,2));
console.log(Math.min(5,9,15,67,82,12,2));

// absolute of a number 
console.log((Math.abs(-1.54)));

// round off 
console.log(Math.round(1.98));

// Strings : primitive types  and object strings 
let fName = "Rahul";                // String 
let lastName = new String("Sindhwani"); // object 
console.log(`fName type - ${typeof(fName)} and lastName type - ${typeof(lastName)}`);

console.log(lastName.toLowerCase());

// methods in string object and primitive string in JS

console.log(fName.includes("ahu"));

console.log(fName.startsWith("R"));

console.log(lastName.endsWith("Ani"));

console.log(fName.toUpperCase().toLowerCase());

let fullName = "       check the space at start and end       ";
console.log(fullName);
console.log(fullName.trim());

let orgString = "How are you !";
console.log(orgString);
console.log(orgString.replace("How","Hii, How"));

console.log(orgString.split(" ",3).join("!"));


// Template Literals 

let message = `this 
is my message 
in 5 lines 
& would be printed same 
and can be dynamic using template literals`;

console.log(message);


// Date and Time
// All pre defined methods on MDN 
let date = new Date('May 5 2004 2:13');
console.log(date);

// Array Manipulations using pre-defined methods 

let numbers = [1,3,5,7,9,11];
// insertions

numbers.push(13);       // end 
numbers.unshift(0);     // begining
numbers.splice(0,3,1,2,3,4);  // middle (startIndex, deleteCount, numbersToAdd)

// searching
console.log(numbers.indexOf(4));

// slicing array 
let portion = numbers.slice(0,3); // (0 to 3 slice) if zero excluded then the first 3 would be removed and the remaining portion would be left 

// Array of Objects 

let people = [
    {no:1,name:"rahul",age:20},
    {no:2,name:"rishabh",age:19},
    {no:3,name:"Anshul",age:18},
    {no:4,name:"Nirmit",age:12},  
];
// includes and indexOf works only for primitives as they compare value of primitives
console.log(people.includes({no:1,name:"rahul",age:20}));
console.log(people.indexOf({no:1,name:"rahul",age:20}));

// in case of objects we have to define a Callback function using find 
let foundVar = people.find(function (people){
    return people.age === 12;
})   // It returns the object that has same property
console.log(foundVar);

// we can use this too as the short notation or the Arrow function notation for the same
// let foundVar = people.find(people => people.age === 12)

// Removing Elements from Array
// let numbers = [1,3,5,7,9,11];
console.log("Before: "+numbers);
numbers.pop();      // end removal
console.log("After pop(): "+numbers);

numbers.shift();    // begin removal
console.log("After shift(): "+ numbers);

numbers.splice(1,2,113,114,115);    // middle removal (startingIndex, deleteCount, Numbers to add instead of them)
console.log("After splice(): "+ numbers);

// Emptying an Array 
let num = [1,2,3,4];
console.log("Before: "+num);
num=[];
console.log("After making it empty:"  +num);
// Still the refernce of the array is there and not deleted, 
//there are better methods to do so :
num.length=0;        // 1
console.log(num);

num.splice(1,num.length);    // 2
console.log(num);

// Combining Arrays
let first = [1,2,3];
let second =[4,5,6];
let combined = first.concat(second);  // way 1 
console.log(combined);

// Spread operator     Way 2 for combining
spreadCombined = [...first,'a',...second,"This is string"];
console.log(spreadCombined);


// Slicing Arrays
let slicedCombined=combined.slice(0,first.length)
console.log(slicedCombined);

// Iterating Array 
for (let i of spreadCombined) {
    console.log(i);     // Value printing 
}
console.log("forEach loop");
slicedCombined.forEach(num=>console.log(num));

// Joining Arrays 
let num1 = [12,18,14,11];
console.log(num1.join(' @ '));

// Splitting Arrays 
let msg = "This is my first message";
console.log(msg.split(' '));

// Sorting Arrays 
console.log(num1.sort((a,b)=> a-b));   // ascending (a-b)

// Filtering Arrays 
// Used with a callback function for a custom/user-defined logic
let filNum = [-4,-13,2,10,12,-3];
console.log("Filtered Array (only positive numbers) -> "+ filNum.filter(val=>val>=0));

// Mapping Arrays
// used to map the elements of array with something else 
let mappArr = filNum
                    .filter(val=>val>0)
                    .map(num=>"Student id: "+num);
console.log(mappArr);

// This method applied above for both the methods in single line is called chaining.