const cir1 = document.getElementById("circle1");
const cir2 = document.getElementById("circle2");
const cir3 = document.getElementById("circle3");

window.addEventListener('mousemove', (e) => {
    cir1.style.left = e.pageX + "px";
    cir1.style.top = e.pageY + "px";

    cir2.style.left = e.pageX + "px";
    cir2.style.top = e.pageY + "px";

    cir3.style.left = e.pageX + "px";
    cir3.style.top = e.pageY + "px";
})