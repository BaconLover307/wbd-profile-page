const parallax = document.getElementById("bike");

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    // console.log("VW: " + vw);
    // if (vw > 992) {
    //     parallax.style.backgroundPositionY = -offset * 100 / vh + "px";
    // } else {
        let off = -offset * 0.1;
        console.log("Offset: " + offset);
        console.log("Off: " + off);
        console.log("Pos: " + parallax.style.backgroundPositionY);
        parallax.style.backgroundPositionY = off + "px";
    // }
})