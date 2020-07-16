let programs = document.getElementsByClassName('prog');
let body = document.getElementsByTagName('body');
let bb = document.getElementsByClassName('bb');
let persInfo = document.getElementById('personal-info');
let block = document.getElementsByClassName('block');
let header = document.getElementsByTagName('header')[0];

let distances = [0];
let number = header.offsetHeight + persInfo.offsetHeight;
for (let j = 0;j < block.length;j++){
    distances.splice(j,0,number);
    a = block[1].offsetHeight;
    number = number + 150 + a/2;
}

body[0].onscroll = function() {
    let sP = document.documentElement.scrollTop;
    let sP2 = document.body.scrollTop;
    for (let j = 0;j < block.length;j++){
        if (sP > distances[j] || sP2 > distances[j]){
            background(j);
        }
    }
}

body[0].onload = function(){
        insertHTML();
    if (window.innerWidth > 720 && window.innerHeight > 1200){
        background(1);
        background(0);
    } else if (window.innerWidth > 720 && window.innerHeight > 1000 && window.innerHeight < 1199 && window.innerWidth < 1300){
        background(0);
    }
}

function background(id){
    if (id == 0){
        programs[id].style.marginRight = '0';
        programs[id].style.opacity = '1';
        setTimeout(firstMovement,1000);
    } else {
        programs[4].style.marginRight = '0';
        programs[4].style.opacity = '1';
        setTimeout(secondMovement,1000);
        setTimeout(barAnimation,1000);
    }
}

function barAnimation(){
    for (let i = 0;i < bb.length;i++){
        let newValue = bb[i].innerHTML.split('%');
        bb[i].parentElement.style.paddingRight = 100 - newValue[0] + '%';
    }
}

function firstMovement(){
    for (let i = 1;i < 4;i++){
        programs[i].style.opacity = '1';
    }
}

function secondMovement(){
    for (let i = 5;i < programs.length;i++){
        programs[i].style.opacity = '1';
    }
}