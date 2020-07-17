let body = document.getElementsByTagName('body')[0];
let blackBox = document.getElementsByClassName('complement');
let content = document.getElementsByClassName('p');
let header = document.getElementsByTagName('header')[0];
let title = document.getElementsByClassName('titulo');

let distances = [0];
let number = header.offsetHeight + title[0].offsetHeight + content[0].offsetHeight;
for (let j = 1;j < blackBox.length;j++){
    distances.splice(j,0,number);
    number = number + 150 + content[0].offsetHeight;
}

for (let i = 1;i<blackBox.length;i++){
    blackBox[i].style.height = content[0].offsetHeight*3 + 'px';
}

body.onload = function(){
    insertHTML();
}

function slideUp(id){
    blackBox[id].style.height = 0;
}

body.onscroll = function(){
    let sP = document.documentElement.scrollTop;
    let sP2 = document.body.scrollTop;
    for (let j = 1;j < blackBox.length;j++){
        if (sP > distances[j] || sP2 > distances[j]){
            slideUp(j);
        } 
    }
}

let prev = document.getElementsByClassName('prev');
let next = document.getElementsByClassName('next');
let dots = document.getElementsByClassName('dots');

for (let i = 0; i<prev.length; i++){
    prev[i].onclick = function(){
        plusSlides(-1,i);
    }
    next[i].onclick = function(){
        plusSlides(1,i);
    }
    let dot = dots[i].children;
    for (let j = 0; j<dot.length; j++){
        dot[j].onclick = function(){
            currentSlide(j+1,i);
        }
    }
}

let slidesCont = document.getElementsByClassName("SlidesContainer");
// let slidesCont2 = document.getElementsByClassName("slideshow-container");

// for (let i = 0; i < slidesCont2.length; i++){
//     slidesCont[i].onmouseover = function(){
//         setTimeout(function() {
//             autoPass(i)
//         },5000);
//     }
//     slidesCont[i].onmouseout = function(){

//     }
// }

let slideIndex = [];
for (let i = 0; i<slidesCont.length; i++){
    slideIndex.push(1);
    showSlides(slideIndex[i],i);
}


// Next/previous controls
function plusSlides(n,index) {
  showSlides(slideIndex[index] += n,index);
}

// Thumbnail image controls
function currentSlide(n,index) {
  showSlides(slideIndex[index] = n,index);
  
}

function showSlides(n,index) {
    let slides = slidesCont[index].children;
    let dots = document.getElementsByClassName("dots")[index].children;
    if (n > slides.length) {
        slideIndex[index] = 1
    }
    if (n < 1) {
        slideIndex[index] = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[index]-1].style.display = "block";
    dots[slideIndex[index]-1].className += " active";
}

function autoPass(n = -1){
    for (let i = 0; i < slideIndex.length; i++){
        if (i != n){
            plusSlides(1,i)
        }
    }
    setTimeout(autoPass,5000);
}

setTimeout(autoPass,5000);