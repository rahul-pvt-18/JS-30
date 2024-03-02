// Changing CSS using JavaScript
// styling page content 
let styleChange = document.querySelector('.style');

// single property 
styleChange.style.color='red';
styleChange.style.backgroundColor='yellow'

// Multiple properties
let contentOne = document.querySelector('.styleOne');
contentOne.style.cssText = 'color:darkgreen; border:2px solid black; font-size:26px';

let contentTwo = document.querySelector('.styleTwo');
contentTwo.setAttribute('style',"color:blue;bg-color:red;border:1.5px solid green;font-size:20px");
// setAttribute can add class and ID also; nor only styles

let contentThree = document.querySelector('.styleThree');
let classNameList = contentThree.className.trim().split(' ');
console.log(classNameList);

// Better-Method & returns an object
let classLists=contentThree.classList;
classLists.add("addClass");
console.log(classLists);

classLists.toggle('main');
classLists.toggle('english');
console.log(classLists);
// Some more methods like contains() and remove() also exists
