// function selectMenu(n){
//     let j = document.getElementById('' + n);
//     let z = j.previousElementSibling;
//     let arrow = z.childNodes[3].childNodes[0].childNodes[0]
//     if (j.style.maxHeight){
//         arrow.style.transform = 'rotate(-90deg)';
//         j.style.maxHeight = null;
//         z.style.position = 'relative';
//     } else {
//         arrow.style.transform = 'rotate(0deg)';
//         j.style.maxHeight = j.scrollHeight*10 + "px";
//         z.style.position = 'sticky';
//     }
// }

let menusContainers = document.getElementsByClassName('menus-container')
for (let i = 0; i<menusContainers.length ; i++){
    menusContainers[i].onclick = function(){
        let j = menusContainers[i].nextElementSibling;
        let arrow = menusContainers[i].childNodes[3].childNodes[0].childNodes[0];
        if (j.style.maxHeight){
            arrow.style.transform = 'rotate(-90deg)';
            j.style.maxHeight = null;
            menusContainers[i].style.position = 'relative';
        } else {
            arrow.style.transform = 'rotate(0deg)';
            j.style.maxHeight = j.scrollHeight*10 + "px";
            menusContainers[i].style.position = 'sticky';
        }
    }
}

// 
// 
// 

// Get the modal
let modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementsByClassName("img-modal");
let modalImg = document.getElementsByClassName("modal-content");
let captionText = document.getElementsByClassName("caption");
let img2 = document.getElementsByClassName('img-modal2');

for (let i = 0; i < modal.length; i++){
  img[i].onclick = function(){
  modal[i].style.display = "block";
  captionText[i].innerHTML = this.alt;
  }
  img2[i].onclick = function(){
    modal[i].style.display = "block";
    captionText[i].innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++){
  span[i].onclick = function() {
    modal[i].style.display = "none";
  }
}