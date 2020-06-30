function rightAn(n){ 
    let x = document.getElementById('programs');
    let y = document.getElementById('ip');
    let z = document.getElementById('ip1');
    let v = document.getElementById('ip2');
    let xx = document.getElementById('idiomas');
    let yy = document.getElementById('ip3');
    let zz = document.getElementById('ip4');
    let vv = document.getElementById('ip5');
    let o = n;
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        if (o == 0){
            x.style.marginRight = '0';
            x.style.opacity = '1';
        } else {
            y.style.opacity = '1';
            z.style.opacity = '1';
            v.style.opacity = '1'; 
        }
    }
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
        if (o == 0){
            xx.style.marginRight = '0';
            xx.style.opacity = '1';
        } else {
            yy.style.opacity = '1';
            zz.style.opacity = '1';
            vv.style.opacity = '1';
        }
    }
}

