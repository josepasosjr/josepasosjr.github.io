function selectMenu(n){
    let j = document.getElementById('' + n);
    let z = j.previousElementSibling;
    let arrow = z.childNodes[3].childNodes[0].childNodes[0]
    if (j.style.maxHeight){
        arrow.style.transform = 'rotate(-90deg)';
        j.style.maxHeight = null;
        z.style.position = 'relative';
    } else {
        arrow.style.transform = 'rotate(0deg)';
        j.style.maxHeight = j.scrollHeight + "px";
        z.style.position = 'sticky';
    }
}