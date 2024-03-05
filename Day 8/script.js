// Asynchronous - these fucntionalities happen, but when, it could'nt be determined/predicted

setTimeout(function(){
    console.log("Printing in 3sec");
},3000);
//this would get into the queue after 3 seconds 

// API - application programming interface
// serves as a Waitor 
// features of async code - clean and concise 
//                        - Better error adling
//                        - Easier Debugging

// Promise
// used for parallel execution

let myPromise = new Promise(function(resolve,reject){
    console.log("This is Promise");
    reject(404);
    // resolve(200); // the code in oarameters would be passed as the message. 
});
myPromise.then(value=>console.log(value));          // The code you want to execute on the successfull execution of the promise
myPromise.catch(error=>console.error(error));      // the code you want to execute of any error/execptin occurs during the execution

let makePromise = new Promise((resolve,reject)=>{
    console.log("Give Promise");
    resolve("Given");
    reject('Relatives');
}).then(value=>console.log(value)).catch(reason=>console.log(reason));

// Task - promise1 -> promise2 -> promise3 -> any task

let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Promise 1 Executed");
    },4000);
    resolve(1);
}).then(value=>{
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Promise 2 Executed");
        },5000);
    });
}).then(value=>console.log("Task Done!!!"));
// Here we can seee that the promises are executed but the task is done before them, but if there is any task that is important to be done before further execution, then a concept is used -> async await 

// In JS, when dealing with asynchronous tasks, promises are used. however, sometimes it's crucial to ensure that certain tasks are completed before proceeding with further execution. Here Async-Await is used 

async function utility(){
    let x=new Promise((resolve, reject) => {
      console.log("Promise X");
      resolve()
    },5000);
    
    let y = new Promise((resolve, reject) => {
        console.log("Promise Y");
        resolve();
    },6000);

    let outX = await x;
    let outY = await y;

    return[x,y];
}


// Fetch API 
// It starts the process of fetching a resource from the network, returning a promise which is fulfilled once response is available
// jsonplaceholder

let todos = fetch('https://jsonplaceholder.typicode.com/todos/1');
todos.then(response=>response.json()).then(json => console.log(json));

async function fetchTodos(){
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todoRes = await todos.json();
    console.log(todoRes);
}
fetchTodos();
async function postTodos(name){
    const todoData = {
        title:`${name}`,
        completed:false,
        userId:1
    };
    const options = { 
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(todoData)
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',options);

    const postedTodos = await response.json();
    console.log(postedTodos);
}

postTodos("Diljit");

// Closures- Top level Entity- The function binded with the required data

function outer(){
    let name = 'Krishna';   // it is local variable of outer

    function displayName(){
        // displayName is the inner function that forms the closure.
        console.log(name);  // use variable in the parent function 
    }
    displayName(); // call the function as the outer function will be called with it 
}

outer();




