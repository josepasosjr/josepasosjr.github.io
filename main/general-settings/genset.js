function insertHTML(type = 0){
    // Insert the header
    let header = document.getElementsByTagName('header');
    let x = "<div id='navigator' onclick=\"selectHeader('hiden-menu')\">";
    x += "<div class='downArrow medhf minhf'><span class='icon'><i class='fa fa-angle-down'></i></span></div>";
    x += "<div class='menus maxhf'><a href='../curriculum/curriculum.html'>CV</a></div>";
    x += "<div class='menus maxhf'><a href='../about-us/about-us.html'>About Me</a></div>";
    x += "<div class='menus maxhf'><a href='../courses/courses.html'>Courses & Certifications</a></div>";
    x += "<div class='menus maxhf'><a href='../jobs-proyects/jobs-proyects.html'>Jobs & Projects</a></div>";
    x += "<div class='menus maxhf'><a href='../contact-info/contact-info.html'>Contact Information</a></div>";
    x += "</div>";
    x += "<div class='medhf minhf' id='hiden-menu'>";
    x += "<div class='menus'>";
    x += "<div><a href='../curriculum/curriculum.html'>Curriculum</a></div>";
    x += "<div><a href='../about-us/about-us.html'>About Me</a></div>";
    x += "<div><a href='../courses/courses.html'>Courses and Certifications</a></div>";
    x += "<div><a href='../jobs-proyects/jobs-proyects.html'>Jobs and Proyects</a></div>";
    x += "<div><a href='../contact-info/contact-info.html'>Contact Information</a></div>";
    x += "</div>";
    x += "</div>";
    header[0].innerHTML = x;
    if (type == 1){
        // Insert the footer
        let footer = document.getElementsByTagName('footer');
        let y = "<div id='mark'>";
        y += "This web aplication was developed by <a href='https://josepasosjr.github.io'>José Pasos</a> and <a href='https://jesusepp.github.io'>Jesús Pereira</a> ";
        y += ", Mechanical Engineering Students at Universidad Simón Bolívar ";
        y += "</div>";
        footer[0].innerHTML = y;
    } else {
        // Insert the footer
        let footer = document.getElementsByTagName('footer');
        let y = "<div id='cont-inf'>";
        y += "<h3>Contact Information</h3>";
        y += "<p class='redes'><span class='icon'><i class='fa fa-github-alt'></i></span><a href='https://github.com/jesusepp'>GitHub</a></p>";
        y += "<p class='redes'><span class='icon'><i class='fa fa-linkedin'></i></span><a href='https://www.linkedin.com/in/jpasos97'>LinkedIn</a></p>";
        y += "<p class='redes'><span class='icon'><i class='fa fa-at'></i></span>josepasosjr@gmail.com / 15-11085@usb.ve </p>";
        y += "</div>";
        y += "<div id='mark'>";
        y += "This web aplication was developed by <a href='https://josepasosjr.github.io'>José Pasos</a> and <a href='https://jesusepp.github.io'>Jesús Pereira</a> ";
        y += ", Mechanical Engineering Students at Universidad Simón Bolívar ";
        y += "</div>";
        footer[0].innerHTML = y;
    }
}

function selectHeader(n){
    let j = document.getElementById('' + n);
    if (j.style.maxHeight){
        j.style.maxHeight = null;
    } else {
        j.style.maxHeight = j.scrollHeight + "px";
    }
}