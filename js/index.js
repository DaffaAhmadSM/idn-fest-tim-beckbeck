const jumpTo = (id) => {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
};

function menuMobile() {
  var x = document.getElementById("navbar-mobile");
  if (x.className === "d-none") {
    x.className = "d-block";
  } else {
    x.className = "d-none";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar-responsive").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar-responsive").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

let slider = document.querySelector(".faktor-kecemasan-slider"),
    innerSlider = document.querySelector(".faktor-kecemasan-slider-inner"),
    pressed = false, //클릭상태 체크
    startx, //마우스드래그 시작점 x좌표
    x; //마우스드래그 실시간 x좌표


function mouseEvent(){
    slider.addEventListener("mousedown",function(e){
        pressed = true;
        startx = e.offsetX - innerSlider.offsetLeft;
        slider.style.cursor = "grabbing";
    })
    slider.addEventListener("mouseenter",function(){
        slider.style.cursor = "grab";
    })
    slider.addEventListener("mouseup",function(){
        slider.style.cursor = "grab";
    })
    window.addEventListener("mouseup",function(){
        pressed = false;
    })
}; //마우스 커서 이벤트
mouseEvent();

function coordinate(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if( parseInt(innerSlider.style.left) > 0 ){
        innerSlider.style.left = "0px";
    } else if (inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
}

slider.addEventListener("mousemove",function(e){
    if(!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startx}px`;
    coordinate();
})