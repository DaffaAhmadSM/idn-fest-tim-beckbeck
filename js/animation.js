
const container = document.getElementsByClassName('container')[0]
document.getElementsByClassName('container')[0].innerHTML = `
<div class="animate1">    
    <span>Bisa</span>
    <span>tidak</span>
    <span>ya?</span>
    </div>
    <div class="animate2">
    <span>Tanggapan</span>
    <span>mereka</span>
    <span>gimana</span>
    <span>ya</span>
    </div>
    <div class="animate3">
    <span>Nilaiku</span>
    <span>bagus</span>
    <span>tidak</span>
    <span>ya</span>
    </div>
    <div class="animate4">
    <span>Lulus</span>
    <span>tidak</span>
    <span>ya</span>
    </div>
    <div class="animate5">
    <span>Nanti</span>
    <span>gimana</span>
    <span>ya</span>
    </div>
    
    <div class="animate6">
    <span>Mereka</span>
    <span>marah</span>
    <span>tidak</span>
    <span>ya</span>
    </div>
<img src="image/asset_orang.png" alt="image orang" class="orang">`;
const animate1 = document.querySelectorAll('.animate1 span');
const animate2 = document.querySelectorAll('.animate2 span');
const animate3 = document.querySelectorAll('.animate3 span');
const animate4 = document.querySelectorAll('.animate4 span');
const animate5 = document.querySelectorAll('.animate5 span');
const animate6 = document.querySelectorAll('.animate6 span');

async function animate() {
    setTimeout(() => {
        for (var i = 0; i < animate1.length; i++) {
            animate1[i].style.animation = "fade-in 0.4s 1." + i + "s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    }, 200);

    setTimeout(() => {
        for (var i = 0; i < animate2.length; i++) {
            animate2[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    }, 1000 * 2.3);
    setTimeout(() => {
        for (var i = 0; i < animate3.length; i++) {
            animate3[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    }, 2000 * 2.3);

    setTimeout(() => {
        for (var i = 0; i < animate4.length; i++) {
            animate4[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    }, 3000 * 2.3);

    setTimeout(() => {
        for (var i = 0; i < animate5.length; i++) {
            animate5[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    } , 4000 * 2.3);
    setTimeout(() => {
        for (var i = 0; i < animate6.length; i++) {
            animate6[i].style.animation = "fade-in 0.4s 1."+i+"s forwards cubic-bezier(0.11, 0, 0.5, 0)";
        }
    } , 5000 * 2.3);
    setTimeout(()=>{
        container.style.animation ="fade-out 0.4s 1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },7000 * 2.1)
    setTimeout(() => {
        //make animate false and save it in localstorage
        localStorage.setItem('animaterun', 'set');
        window.location.replace("/question.html");
    } , 7000 * 2.6);
}
if (!localStorage.getItem('animaterun')) {
    animate();
    }else{
    window.location.replace("/question.html");
}
