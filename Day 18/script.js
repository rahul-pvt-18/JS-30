const changeBtn = document.querySelector('.changeBtn');
changeBtn.addEventListener('click',buttonClickHandler);



const changeP = document.querySelector('#para');


function buttonClickHandler(){
    console.log("You have to click");
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET','new.txt',true);

    xhr.onprogress = () => {   // optional 
        console.log("On progress");
        // can be used to show spinner or loader
    }
    xhr.onload = () =>{
        if(xhr.status === 200){
            console.log(xhr.responseText);
            changeP.innerHTML = xhr.responseText;
        }else{
            console.error("Error : ",xhr.responseText);
        }
    }
    xhr.send();
}

// Post request using AJAX
const postBtn = document.querySelector('.postBtn');
postBtn.addEventListener('click',postReq);

function postReq(){
    const xReq = new XMLHttpRequest();

    xReq.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xReq.getResponseHeader('Content-type','application/json');
    
    xReq.onprogress = ()=>{
        console.log("Posting the content");
    }
    xReq.onload=()=>{
        if(xReq.status === 200){
            console.log(xReq.responseText);
        }else{
            console.error("Error Occurred");
        }
    }
    let params = {"name":"Rahul","salary":"20000","age":"21"};
    xReq.send(params);
}
