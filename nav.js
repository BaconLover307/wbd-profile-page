function nav(id) {
    if (id==="nav-profile") {
        window.scrollTo(0,0);
    } else if (id === "nav-bike") {
        setTimeout(function () {
            window.scrollTo(0, window.innerHeight);
        }, 0);
    } else {
        setTimeout(function () {
            window.scrollTo(0, 1.2 *window.innerHeight);
        }, 0);
    }
}

window.addEventListener('scroll', function(e) {
    const pos = window.scrollY;
    
    Array.from(document.getElementsByClassName("nav-item"))
        .forEach(elm => {elm.classList.remove("active");});
    if (pos < window.innerHeight) {
        document.getElementById("nav-profile").classList.add("active");
    } else {
        if (pos < 1.3 * window.innerHeight) {
            document.getElementById("nav-bike").classList.add("active");
        } else {
            document.getElementById("nav-contact").classList.add("active");
        }
    }
})