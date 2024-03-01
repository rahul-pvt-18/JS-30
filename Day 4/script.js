// Accessing Element in DOM
document.getElementById('bom');
// this method fetches/return the object tag, element in the webpage with the id provided and called on document and returns a single object


// if someone need to access more than 1 object in the dom (multiple objects access).
// 1. 
let bom_items = document.getElementsByClassName("BOM");
bom_items[0].style.backgroundColor = 'red';
// 2. 
let paras = document.getElementsByTagName('p');
for(let i=0;i<paras.length;i++){
    paras[i].style.color = 'orange';
}
// Both these methods returns array like object "HTML Collections"(not an array), (returns objects as the name suggest), both of them are used over the document object and returns multiple objects.


// QuerySelector and QuerySelectorAll

document.querySelector("#dom");     // #id_provided
document.querySelector(".dom");     // .class_Name
document.querySelector('p');        // Tag_name
//  They select only single element, if there are many with same credentials then the first-one would be selected

document.querySelectorAll('.desc'); // .class_Name
document.querySelectorAll('p');     // Tag_name
// Multiple Elements 
// Returns a Array like object "NodeList"


// Updating Exisiting Content
document.querySelector("#dom").innerHTML = `
<b>DOM</b> - It provides methods/ways to access the window of Browser.
            Document Object Model
            html page is firstly converted into JS object >>> Document Object
            Tree-like Structure
            <br>
            <b>Now Accessed by JavaScript using innerHTML</b>
`

console.log(document.querySelector("#dom").outerHTML);
// It returns the HTML element, including attributes, start tag and end tag
// If changed this then nothing (including the tags) would be left. 


// textContent  -  it renders the tags in the given element as text and also print it also it can access the display hidden content unlike innerHTML (rest it is same as innerHTML)
/*
document.querySelector("#dom").textContent = "<b>Hello</b> Tu kaisa hai be "
document.querySelector("#dom").innerHTML = "<b>Hello</b> Tu kaisa hai be "
*/
// innerText - same as innerHTML 

let newWindowEl = document.querySelector('.window');
// Adding New Element/Content 
let newChild = document.createElement('span');
newChild.innerHTML = "Span Created with JS on Console";
newWindowEl.appendChild(newChild)

// Creating Text node (2 methods)
// 1. Difficult
let newPara = document.createElement('p');
let textPara = document.createTextNode("This is textNode method 1 ");
newPara.appendChild(textPara);
newWindowEl.appendChild(newPara);

// 2. Easy 
let newPara2 = document.createElement('p');
newPara2.textContent = "This is method 2 by not creating text node (text node method 2)";
newWindowEl.appendChild(newPara2);

// Both the methods have Drawback that the element would be added only at the last position 

// ==> Solution to this is Here 

newPara.insertAdjacentHTML("beforebegin"," Before-begin");

newPara.insertAdjacentHTML('afterbegin','After-begin  ');

newPara.insertAdjacentHTML('beforeend','Before-End');

newPara.insertAdjacentHTML("afterend","After-End");

// Removing Child 
newWindowEl.removeChild(newPara2);
// removed newPara2 from the window
// In this method the parent and the child both must be known 

// if parent is not known 
const parent = newPara.parentElement;
parent.removeChild(newPara);
// newPara removed 




