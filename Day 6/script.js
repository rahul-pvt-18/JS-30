// Browser Events 
// the events are invisible to a user that is using the website or the application & to make it visible this is used 
// monitorEvents()

// Every Event is the calls its event listener
// it describes that what would happen after any action taken by the user 

// EventTarget- top level entity (interface implemented by object, that can recieve events and may have a listener for them)
// Element inherits Node, and it inherits EventTarget

// Lets apply any event to the document and print something 
document.addEventListener('click',()=>console.log("Do not touch, i am DOCUMENT"));

// Tasks 
let btn1 = document.querySelector('.eventBtn1');
let btn2 = document.querySelector('.eventBtn2');
let btn3 = document.querySelector('.eventBtn3');
let btn4 = document.querySelector('.eventBtn4');

btn1.addEventListener('click',function(){
    console.log("Main Button 1 hu");
});

btn2.addEventListener('dblclick',()=>{
    console.log("I am btn 2");
});

// Lets change the background color of btn 3 using event listener
function change(event){
    event.target.setAttribute('style', 'font-size: 35px; background-color: hotpink; color: black; border: 1px solid black;width:200px');
}
function vain(event){
    event.target.removeAttribute('style');
}
btn3.addEventListener('mouseover',change);
btn3.addEventListener('mouseout',vain);
// btn3.addEventListener('mouseover', () => {
//     btn3.setAttribute('style', 'font-size: 35px; background-color: hotpink; color: black; border: 1px solid black;width:200px');
// });
// btn3.addEventListener('mouseout',()=>{
//     btn3.removeAttribute('style');
// })

// removing an eventListenter
btn4.addEventListener('click',change);
btn4.removeEventListener('click',change);   // provide the same parameters in removeing event listener

// Phases of an Event 
// Capturing, At Target and Bubbling phase 
// by default eventListener exectues in bubbling phase 

btn4.addEventListener('mouseover',()=>console.log("Capturing phase execution"),true);
// By true, the capturing phase would be activated 

// The Event Object
btn4.addEventListener('click',(event)=>{
    console.log(event);
})
// the function receieves an event object when the event occurs, that provides a lot of information

// The Default action 
// preventDefault() - to prvent any action to happen like to stop anchor tag to act normal 

document.querySelector('.ig').addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("No IG now");
})

 