// Basics 

//  1. Printing methods 
console.log("Hii This is Console log printing ");

// alert("Open Console");
const actualName = 'Singh'
if(true){
    let a = 5;
    var fName = 'rahul';
    // actualName = 'Singhania';
    console.log(actualName); // const can not be redeclared even
    
    console.log(fName);
    
    console.log(a);
    a++;
}
fName = 'King'
console.log(fName);   // var has global scope and can be redeclared 

// console.log(a);     // Error because let has  onlly the local scope 

// JS is a dynamically typed language so we can change even the datatype stored in the variable, without even re-initializing it 

///////////////////////////       Objects       ///////////////////

let details = {
    name:"rahul",
    age:21
};

console.log(details.name);
console.log(details['age']);

let myDetails = {
    name:"rahul",
    age:"21"
};

// Comparison Operator
// Strict Comparison
if(details.age === myDetails.age){
    console.log("Strict comparison Prevails");
}
else if(details.age !== myDetails.age){
    console.log("Trying Loose one");
    if(details.age == myDetails.age){
        console.log("Loose comparison Prevails ");
    }
    else{
        console.log("Kuch nahi bhai different hai bht");
    }
}


// Arrays 

let names = ["Honey", "Badshah", "Anuv", "Talwinder"];
console.log(names);



//////////////     Lets Learn more on Objects //////////////

/*
Object Creation:
Create an empty object called person.
Add properties name, age, and gender to the person object.
*/

let person = {
    name:"Saksham",
    age:18,
    gender:"Male",
    
};
console.log(person);
/*
Object Manipulation:
Update the age property of the person object.
Add a new property occupation to the person object.
*/

person.age = 20;
person.occupation = "Delivery";
console.log(person);

/*
Object Access:
Access and log the name property of the person object.
Access and log the occupation property of the person object.
*/
console.log(person.name, person.occupation);



/*
Object Iteration:
Create an object car with properties brand, model, and year.
Iterate over the properties of the car object and log each property and its value.

Object Methods:
Add a method getDetails to the person object that logs all properties of the person.

*/

let car = {
    brand:"Hundai",
    model:"GT line",
    year:2013
}

for(let val in car){
    console.log(val+"-"+car[val]);
}

// 5. Object Methods
person.getDetails = function() {
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    }
  };
 
person.getDetails();
  

/*
Array Creation:
Create an empty array called fruits.
Add three fruits to the fruits array.
*/
let fruits =[];
fruits.push("Apple","Mango","Banana");
// console.log(fruits);

/*
Array Manipulation:
Remove the second fruit from the fruits array.
Add two more fruits to the end of the fruits array.
*/
fruits.splice(1,1);         // StartIndex , DeleteCount daalo Delete hojayga vo array 
fruits.push("Anaar", "Kinnow");
console.log(fruits);

/*
Array Access:
Access and log the first fruit in the fruits array.
Access and log the last fruit in the fruits array.
*/
console.log(fruits[0],fruits[fruits.length-1]);

/*
Array Iteration:
Create an array numbers with values 1 to 5.
Iterate over the numbers array and log each number.
*/
let numbers=[1,2,3,4,5];
for(let val of numbers){
    console.log(val);
}

/*
Array Methods:
Use the push method to add a new number to the numbers array.
Use the pop method to remove the last number from the numbers array.
*/

numbers.pop();
numbers.push(6);
/*
Array Transformation:
Create an array of numbers and square each number using the map method.
Filter the array to keep only even numbers using the filter method.
*/

let num  = [1,2,3,4,5,6];
let sqNum = num.map(element=>element*element);
let evenNum = sqNum.filter(element=>element%2==0)
console.log(evenNum);



// Object Constructor:
// Create a constructor function Student that takes name and age as parameters and sets them as properties of the created object.

// Prototype Method:
// Add a method displayInfo to the Student prototype that logs the name and age of the student.

// Object Inheritance:
// Create another constructor function Teacher that inherits from Student. Add a new property subject to the Teacher constructor.

function Student(name,age){
    this.name = name;
    this.age = age;
    // prototype method
    Student.prototype.displayName = ()=>{
        console.log(`Name: ${this.name} and Age: ${this.age} `);
    }    
}


let student1 = new Student("Badshah", 45);
student1.displayName();

 
// Teacher Constructor Function

function Teacher(name,age,subject){
    Student.call(this,name,age);
    this.subject=subject;
}

let teacher1 = new Teacher("Kabir Singh",21,"Biology");
console.log(teacher1);

// Object Composition:
// Create an object address with properties street, city, and zipcode.
// Add the address object as a property to the person object created earlier.

let address = {
    street:1,
    city:"Rohtak",
    zipcode:124001
};

console.log(address);

person.address = address;
console.log(person);
