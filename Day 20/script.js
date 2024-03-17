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
        // $(this).hide();
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
    


    // demoing the on method 
    $('p.paraTwo').on(
        {
            click:function(){
                console.log("ParaTwo clicked");
            },
            mouseleave:function(){
                console.log("ParaTwo mouse leave !");
            }
        }
    )

    // $('p#toHide').hide(1000,function(){
    //     console.log("Hidden the para toHide");
    // })
    // $('p#toHide').show(1000,function(){
    //     console.log("Shown the para toHide");
    // })

    $('.toggleBtn').click(function(){
        $('p#toHide').toggle(1000);
        // fadeIn()
        // fadeOut()
        // fadeToggle()
        // fadeTo()
        // slideUp()
        // slideDown()
        // slideToggle()
    })

    // Animate in jQuery 
    $('.animation').animate({
        opacity:0.3,
        height:'90px',
        width:'6px'
    },3000);
    $('.animation').animate({
        opacity:0.9,
        width:'100px',
    },2000);

    console.log($('.textFind').text());
    $('.textFind').text('Name changed');

    // do this in console (not effect entire code)
    // $('body').html("Everything is changed");


    $('#ta').val('this is TextArea'); // without params it would return the value of it 
    $('#inp').val('Input here');
    
    // empty method would empty the value 
    // $('#paraThree').empty();

    // remove method would remove the element from the DOM
    $('.removeEl').remove();

    // addClass would add the classs 
    $('.paraFour').addClass('name');
    $('.paraTwo').addClass('name');

    // removeClass would remove the class 
    $('.paraTwo').removeClass('name');
    
    // css method
    $('.paraOne').css('background-color','lightblue');
    $('.paraOne').css('padding','10px 10px');
    


});