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
    // content[id].style.maxHeight = content[0].offsetHeight + "px";
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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}