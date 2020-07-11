let programs = document.getElementsByClassName('prog');
let body = document.getElementsByTagName('body');
let bb = document.getElementsByClassName('bb');

body[0].onscroll = function() {
    if (window.innerWidth > 350 && window.innerWidth < 500){
        if (this.scrollTop > 450 || document.documentElement.scrollTop > 450){
            background(0);
        } if (this.scrollTop > 700 || document.documentElement.scrollTop > 700){
            background(4);
        }
    } else if (window.innerWidth < 349){
        if (this.scrollTop > 200 || document.documentElement.scrollTop > 200){
            background(0);
        } if (this.scrollTop > 400 || document.documentElement.scrollTop > 400){
            background(4);
        }
    } else if (window.innerWidth > 720 && window.innerWidth < 1300 && window.innerHeight > 1000 && window.innerHeight < 1199){
        if (this.scrollTop > 200 || document.documentElement.scrollTop > 200){
            background(4);
        }
    } else if (window.innerWidth > 1301){
        if (this.scrollTop > 300 || document.documentElement.scrollTop > 300){
            background(0);
        } if (this.scrollTop > 600 || document.documentElement.scrollTop > 600){
            background(4);
        }
    } else if (window.innerWidth > 501 && window.innerHeight < 999){
        if (this.scrollTop > 400 || document.documentElement.scrollTop > 400){
            background(0);
        } if (this.scrollTop > 800 || document.documentElement.scrollTop > 800){
            background(4);
        }
    }
}

body[0].onload = function(){
        insertHTML();
    if (window.innerWidth > 720 && window.innerHeight > 1200){
        background(4);
        background(0);
    } else if (window.innerWidth > 720 && window.innerHeight > 1000 && window.innerHeight < 1199 && window.innerWidth < 1300){
        background(0);
    }
}

function background(id){
    programs[id].style.marginRight = '0';
    programs[id].style.opacity = '1';
    if (id == 0){
        setTimeout(firstMovement,1000);
    } else {
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