function slideUp(id,box = 1){
    let element = document.getElementById('' + id);
    if (box == 0){
        element.style.height = 0;
    } else {
        // alert('hello');
        element.style.maxHeight = 490 + "px";
    }
}

function lineDetection(){
    let scrollPoint = document.documentElement.scrollTop;
    let scrollPoint2 = document.body.scrollTop;
    if (scrollPoint2 > 50 || scrollPoint > 50){
        slideUp('a1',100);
        slideUp('a2',0);
    } 
    if (scrollPoint2 > 550 || scrollPoint > 550){
        slideUp('b1',100);
        slideUp('b2',0);
    } 
    if (scrollPoint2 > 1200 || scrollPoint > 1200){
        slideUp('c1',100);
        slideUp('c2',0);
    } 
}

function selectMenu(n){
    let j = document.getElementById('' + n);
    if (j.style.maxHeight){
        j.style.maxHeight = null;
    } else {
        j.style.maxHeight = j.scrollHeight + "px";
    }
}

