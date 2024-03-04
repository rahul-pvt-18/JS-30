// Performance 
// measuring the speed of the code/ writing efficient code for fast execution 

// Adding 100 paragraps by differnt methods
// 1.
function methodOne(){
    for(let i=0;i<100;i++){
        let newPara = document.createElement('p');
        newPara.textContent = "Paragraph "+i;
        document.body.appendChild(newPara);
    }
}
const t0 = performance.now();
methodOne();
const t1 = performance.now();
console.log(`Call to methodOne took ${(t1 - t0)} seconds.`);
// 100 reFlow and rePaint with no extra element

// 2.
function methodTwo(){
    let container = document.createElement('div');
    for(let i=0;i<100;i++){
        let newPara = document.createElement('p');
        newPara.textContent = 'Paragraph '+i;
        container.appendChild(newPara);
    }
    document.body.appendChild(container);
}
let t2 = performance.now();
methodTwo();
let t3 = performance.now();
console.log(`Call to methodTwo took ${(t3 - t2)} seconds.`);
// 1 reFlow and rePaint but an extra element div Container

// 3.
function methodThree(){
    let fragment = document.createDocumentFragment();
    for(let i=0; i<100; i++){
        let newPara = document.createElement('p');
        newPara.textContent = 'Paragraph ' + i;
        fragment.appendChild(newPara);
    }
    document.body.appendChild(fragment);
}

let t4 = performance.now();
methodThree();
let t5 = performance.now();
console.log(`Call to methodThree took ${(t5 - t4)} seconds.`);
// 1 reFlow and rePaint and no extra element
// the best method to do so 

// Reflow - Computation tasks processed, when any of object is added to DOM.
// Repaint - Repaint the screen according to the Reflow computations.

// Call Stack - represents the mechanism by which the JavaScript engine keeps track of function calls in a program.

function a(){
    b();
    console.log('a');
}

function b(){
    console.log('b');
}
a();

// Event Loop
// Normal functions are synchronous 
// Event Listeners are not synchronous

// The normal call stack is performed till any non-synchronous task arrives like eventListener

//1. addEventListener() hand-on the function to the browser and pops from the stack

//2. whenever the event is fixed, browser throws the task/function to the event queue.

// 3. Event queue checks the call stack first and if it is empty then the functionis executed. 
// philip robert --->>Event Loop best explanation 