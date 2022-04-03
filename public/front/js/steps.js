
let steps=document.querySelectorAll(".stepes ul li:nth-child(2n+1)");

let p=document.querySelector(".progress");

let span=document.querySelectorAll(".circle span");

let pre=document.querySelector(".prev");
let next=document.querySelector(".next");

// let circle=document.querySelectorAll(".circle")
let tabs=document.querySelectorAll(".tabs")
console.log(tabs);
let i=0;

pre.addEventListener("click",()=>{
    remveCurrent(steps);

    remveCurrent(tabs);

    if(i <= 0){
        i=0;
        steps[i].classList.add("active");
        steps[i].classList.add("current")
        tabs[i].classList.add("current")
    }else{
        for(let j=0;j < steps.length;j++){
            if(i > j && i < steps.length){
                if(steps[i].classList.contains("active")){
                    steps[i].classList.remove("active");
                    steps[i].previousElementSibling.classList.remove("active");
                }              
            }
        }
        i--;
        steps[i].classList.add("curent")
        tabs[i].classList.add("current")
    }
});
next.addEventListener("click",()=>{
    remveCurrent(steps);
    remveCurrent(tabs);
    if(i >= steps.length-1){
        i=steps.length - 1;
        steps[i].classList.add("curent");
        tabs[i].classList.add("current")
    }else{
        console.log(i);
        i++;
        steps[i].classList.add("active");
        steps[i].classList.add("curent")
        tabs[i].classList.add("current")
        steps[i].previousElementSibling.classList.add("active");
    }
    
});

function remveCurrent(arry){
    arry.forEach(element => {
        if(element.classList.contains("current")){
            element.classList.remove("current")
        }
    });
}

// this close popup 
if(popup_close_popchout){
    popup_close_popchout.addEventListener("click",(e)=>{
        e.target.parentElement.style.display="none";
    });
}