window.onscroll = function() {stickyNav()};

var nav = document.getElementById("navbar");

var sticky = nav.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}