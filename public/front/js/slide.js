let maiLeft = document.querySelector(".slider-top .before");
let mainRight = document.querySelector(".slider-top .after");

let pointes=document.querySelectorAll(".slider-point span");

let images=[
    "./front/images/slide/slid1.jpg",
    "./front/images/slide/slid2.jpg",
    "front/images/slide/slid3.jpg",
    "front/images/slide/slid4.jpg",
    "front/images/slide/slid5.jpg",
];
let sliderTopImg = document.querySelector(".slider-top img");

let x=0;
sliderTopImg.src = images[x];

setInterval(()=>{
    sliderTopImg.src = images[x];

    if(x >= images.length-1){

        x = 0;
        pointes[images.length-1].classList.remove("active")
        pointes[x].classList.add("active");

    }else {
        x++;
        pointes[x-1].classList.remove("active")
        pointes[x].classList.add("active");
    }
},10000)

maiLeft.addEventListener("click",()=>{
    removeActive(pointes);
    
    if(x >= images.length-1){
        x = images.length-1;
        sliderTopImg.src = images[x];
        pointes[x].classList.add("active");
    }else {
        x++;
        sliderTopImg.src = images[x];
        pointes[x].classList.add("active");
    }
})
mainRight.addEventListener("click",()=>{
    removeActive(pointes);
    if(x < 0){
        x = 0;
        sliderTopImg.src = images[x];
        pointes[x].classList.add("active");
    }else {
        sliderTopImg.src = images[x];
        pointes[x].classList.add("active");
        x--;
        if(x<0){
            x = 0;
        }
    }
})
function removeActive(arry){
    arry.forEach(element => {
        if(element.classList.contains("active")){
            element.classList.remove("active")
        }
    });
}
pointes.forEach(element => {
    element.addEventListener("click",(e)=>{
        removeActive(pointes);
        e.target.classList.add("active");
    });
});
