let logoSm=document.querySelector(".logo-sm");

// service title in footer
let serviceitemul=document.querySelectorAll(".services-item span" )
    logoSm.innerHTML=`<img src="front/images/logo.svg" alt="" srcset="">`;
serviceitemul.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.nextElementSibling.classList.toggle("d-block");
    })
});

let butoomNav=document.querySelector(".bootmnav");

let topNav=document.querySelector(".topnav");

// butoomNav.style.marginTop = topNav.offsetHeight;

let minu=document.querySelector(".minu-sm");

let navContent=document.querySelector(".conetnt-nav")

let nav=document.querySelector("nav")

navContent.style.top = nav.offsetHeight;

minu.addEventListener('click',()=>{
    navContent.classList.toggle("openside");
})

window.onresize=()=>{
    if(window.innerWidth > 750){
        navContent.classList.remove("openside");
    }
    if(window.innerWidth < 750){
        // topNav.classList.add("topmov");
        topNav.style.top= butoomNav.offsetHeight;
    }
}

// section search
let search = document.querySelector(".main-search");
let items = document.querySelectorAll(".item");
if(search){
    search.addEventListener('input',  (e) =>{
        items.forEach(element => {
        if (element.textContent.includes(search.value)) {
          element.style.display = "inline-flex";
        }
        else {
          element.style.display = "none";
        }
      });
    });
}

/////////////////////// increase count book in cart///////////////
let shoppingCart=document.querySelectorAll(".add-to-links__item .fa-shopping-cart");
let countItemCart=document.querySelector(".icon-marking span small");
shoppingCart.forEach((element)=>{
    element.addEventListener("click",()=>{
        let count = parseInt(countItemCart.textContent);
        countItemCart.innerHTML = count + 1;
    });
});
//////////////////////////////

///////////////////
let lang=document.querySelector(".lang");
let langName=document.querySelector(".lang-name");
let body=document.body;
if(lang.classList.contains("ar")){
    langName.textContent="english";
    document.body.classList.add('ar');
}else{
    langName.textContent="عربي";
}
lang.addEventListener("click",(e)=>{
    e.preventDefault();
    if(lang.classList.contains("ar")){
        body.classList.remove('ar');
        lang.classList.remove("ar")
        lang.classList.add("en")
        body.classList.add('en');
    }else{
        lang.classList.add("ar")
        lang.classList.remove("en")
        body.classList.add("ar")
        body.classList.remove("en")
    }
    if(lang.classList.contains("ar")){
        langName.textContent="english";
    }else{
        langName.textContent="عربي";
    }
});
//////////////////

let leftItems=document.querySelector(".left-items");
let rightItems=document.querySelector(".right-items");
if(leftItems){
    leftItems.addEventListener("click",(e)=>{
        e.target.parentElement.scrollLeft-=210;
        
    });
}
if(rightItems){
rightItems.addEventListener("click",(e)=>{
    e.target.parentElement.scrollLeft+=210;
    
});
}