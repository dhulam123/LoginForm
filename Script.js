var title = document.querySelector('.title h1');
var uname  = document.querySelector('#name');
var conPassword  = document.querySelector('#confirmPassword');

var register  = document.querySelector('#register');
var login  = document.querySelector('#login');

var buttondiv = document.querySelector('.button-div');

// console.log(title);
// console.log(uname);
// console.log(conPassword);
// console.log(register);
// console.log(login);

register.addEventListener("click",function(){
    if(login.classList.contains('active')){
        login.classList.remove('active');
    }
    register.classList.add('active');
    title.innerHTML="REGISTER"
    uname.style.maxHeight="60px";
    conPassword.style.maxHeight="60px" 
    buttondiv.style.marginTop="15px"
})
login.addEventListener("click",function(){
    if(register.classList.contains('active')){
        register.classList.remove('active');
    }
    login.classList.add('active');
    title.innerHTML="LOGIN"
    uname.style.maxHeight="0";
    conPassword.style.maxHeight="0" 
    buttondiv.style.marginTop="-15px"
})