function nav(id) {
    Array.from(document.getElementsByClassName("nav-item"))
        .forEach(elm => {
            elm.className = elm.className.replace(" active", "");
        });
    document.getElementById(id).className += " active";

}

document.getElementById("nav-profile").click();