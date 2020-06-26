function selectMenu(n){
    let j = document.getElementById('' + n);
    let z = j.previousElementSibling;
    if (j.style.maxHeight){
        j.style.maxHeight = null;
        z.style.position = 'relative';
    } else {
        j.style.maxHeight = j.scrollHeight + "px";
        z.style.position = 'sticky';
    }
}