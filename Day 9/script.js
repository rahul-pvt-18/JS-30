let display = document.querySelector('.display');
let counter = display.innerHTML;
let incrementBtn = document.querySelector('.increment');
let decrementBtn = document.querySelector('.decrement');
let resetBtn = document.querySelector('.reset');

incrementBtn.addEventListener('click',()=>{
    counter++;
    display.innerHTML = counter;
});

decrementBtn.addEventListener('click',()=>{
    counter--;
    display.innerHTML = counter;
})

resetBtn.addEventListener('click',()=>{
    counter = 0;
    display.innerHTML = counter;
})