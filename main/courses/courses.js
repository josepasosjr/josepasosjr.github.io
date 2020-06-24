function selectMenu(n){
    let j = document.getElementById('' + n);
    if (j.style.maxHeight){
        j.style.maxHeight = null;
    } else {
        j.style.maxHeight = j.scrollHeight + "px";
    }
}
