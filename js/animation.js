
const animate1 = document.querySelectorAll('.animate1 span');
const animate2 = document.querySelectorAll('.animate2 span');
const animate3 = document.querySelectorAll('.animate3 span');
const animate4 = document.querySelectorAll('.animate4 span');
const animate5 = document.querySelectorAll('.animate5 span');
const animate6 = document.querySelectorAll('.animate6 span');
var animate;

async function animate() {

    setTimeout(() => {
        for (var i = 0; i < animate1.length; i++) {
            animate1[i].style.animation = "fade-in 0.4s 1." + i + "s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate = animate1[i];
        }
    }, 200);

    setTimeout(() => {
        for (var i = 0; i < animate2.length; i++) {
            animate2[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate  = animate2[i]
        }
    }, 1000 * 2.3);
    setTimeout(() => {
        for (var i = 0; i < animate3.length; i++) {
            animate3[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate  = animate3[i]
        }
    }, 2000 * 2.3);

    setTimeout(() => {
        for (var i = 0; i < animate4.length; i++) {
            animate4[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate  = animate4[i]
        }
    }, 3000 * 2.3);

    setTimeout(() => {
        for (var i = 0; i < animate5.length; i++) {
            animate5[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate  = animate5[i]
        }
    } , 4000 * 2.3);
    setTimeout(() => {
        for (var i = 0; i < animate6.length; i++) {
            animate6[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
            animate  = animate6[i]
        }
    } , 5000 * 2.3);
    setTimeout(() => {
        // window.location.replace("/question.html");
    } , 7000 * 2.3);
}

animate();
