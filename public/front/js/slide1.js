let popupparent = document.querySelector(".popaup");
let close = document.querySelector(".popaup .close")
let slide = document.querySelector(".slider");
let left = document.querySelector(".before");
let right = document.querySelector(".after");
let popchilddiv = document.querySelector(".popaup >div");
let imgs = document.querySelectorAll(".slider .box-img-slider-item >img");
let div = document.querySelectorAll(".slider .div");
let topimg = document.querySelector(".slider .img-top img");
// let topimgp = document.querySelector(".popaup .img-top img");
let slideElemwnt;
let parent;
let child;
let i = 0;
let w = document.body.offsetHeight;

popupparent.style.display = "none";

topimg.addEventListener("click", (e) => {
    popupparent.style.display = "flex";
    parent = e.target.parentElement.parentElement;
    child = parent.cloneNode(true)
    popchilddiv.append(child);
    popupparent.style.height = w + "px";
    slideElemwnt = document.querySelectorAll(`.popaup #${parent.id} .box-img-slider-item >img`)
    left = document.querySelector(`.popaup #${parent.id} .before`);
    right = document.querySelector(`.popaup #${parent.id} .after`);
    left.addEventListener("click", (e) => {
        if (i <= 0) {
            i = 0;
            document.querySelector(".popaup >div .img-top img").src = slideElemwnt[i].src;
        } else {
            i--;
            document.querySelector(".popaup >div .img-top img").src = slideElemwnt[i].src;
        }
    });
    right.addEventListener("click", (e) => {
        if (i >= slideElemwnt.length - 1) {
            i = slideElemwnt.length - 1;
            document.querySelector(".popaup >div .img-top img").src = slideElemwnt[i].src;
        } else {
            i++;
            document.querySelector(".popaup >div .img-top img").src = slideElemwnt[i].src;

        }
    });
})
close.addEventListener("click", () => {
    popchilddiv.innerHTML = " ";
    popupparent.style.display = "none";
});
imgs.forEach(element => {
    element.addEventListener("click",(e)=>{
        topimg.src=e.target.src;
    });
});