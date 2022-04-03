
let popup=document.querySelector(".section-popses");
let popContainer=document.querySelector(".popes-container");

let mainPopup = document.querySelector(".pop-main");

let popchout = document.querySelector(".popchout");


let mainPopContent = document.querySelector(".pop-main >div");
let popchoutContent = document.querySelector(".popchout >div");
let popup_close_main=document.querySelector(".popup-close-main")
let popup_close_popchout=document.querySelector(".popup-close-popchout")

let newAccount = document.querySelector(".new-accaont");
let login=document.querySelector("#login-pop");

let popupSign=document.querySelector(".popes-container .sign-up-popup");
let popupLogin=document.querySelector(".popes-container .login-popup");


let cartShop=document.querySelector(".update-cart-shopping");
let cartPersonInfo=document.querySelector(".cart-presonal-info");

let popupCheckout=document.querySelector(".popupCheckout");




if(login){
  
    login.addEventListener("click",(e)=>{
        e.preventDefault();
        mainPopup.style.display="block";
        mainPopContent.innerHTML=" ";
        mainPopContent.appendChild( popupLogin );
    });
}
if(newAccount){
    newAccount.addEventListener("click",(e)=>{
        e.preventDefault();
        mainPopContent.innerHTML=" ";
        mainPopContent.appendChild( popupSign );
        mainPopContent.style.display="block";
    });
}
if(cartShop){


    cartShop.addEventListener("click",(e)=>{
        e.preventDefault();
        popchout.style.display="block";
    });
}

if(popup_close_main){

    popup_close_main.addEventListener("click",(e)=>{
        e.target.nextElementSibling.innerHTML="";
        e.target.parentElement.style.display="none";
    });
}
// this close popup 
if(popup_close_popchout){
    popup_close_popchout.addEventListener("click",(e)=>{
        e.target.parentElement.style.display="none";
    });
}



