// When the page is loaded then the code would run 
$(document).ready(function () {


    console.log($);  
    // $ means jQuery
    console.log("We are using jQuery");

    // $('selector').action(function(){...body of function...})

   
   

    // there are 3 main types of selectors in Jquery 
    // 1. element selector - direct name of the element
    $('p').click(function(){
        console.log("You clicked the p tag");
        $(this).hide();
    })


    // 2. Class selector  - .
    $('.paraOne').click(function(){
        console.log("This is paraOne");
    })    

    // 3. ID selector      - #


    // other selectors
    // $('*').click();   // click on all the elements
    
    // $('p.paraTwo').click();   // click on p with class paraOne

    // $('p:second').click(function(){
    //     console.log(this);
    // })
    // $('p:first').click();

    // Events in jQuery
    // 1. Mouse events : click, double-click, mouseEnter, mouseLeave
    // 2. KeyBoard Event: keyPress, keydown, keyup
    // 3. form events: submit, focus, blur, change
    // 4. document/window events: load, resize, scroll, unload
    


});