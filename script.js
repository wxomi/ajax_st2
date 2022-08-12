console.log("Hello");

let blogArray = [];
let descript = document.getElementsByClassName('description');
let descriptUser = document.getElementsByClassName('descipt-phead');
let descriptUser2 = document.getElementsByClassName('descipt-phead2');
// console.log(descript[0].getElementsByTagName('h3')[0].innerText);
window.addEventListener('load',()=>{
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = ()=>{
        var responseJSON = JSON.parse(xhrRequest.response);
        // console.log(responseJSON);
        blogArray = responseJSON;
        console.log(blogArray);
        for(let i = 0;i<descript.length;i++){
            descript[i].getElementsByTagName('h3')[0].innerText = blogArray[i].name;
            descriptUser[i].innerText = blogArray[i].username;
            descriptUser2[i].innerText = blogArray[i].website;
        }
    }

    xhrRequest.onerror = function(){
        console.log("Request Failed");
    }
    xhrRequest.open('get','https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11',true);
    xhrRequest.send();
});
