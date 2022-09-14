const jumpTo = (id) => {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
};

// Navbar
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
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// Slider
let slider = document.querySelector(".faktor-kecemasan-slider"),
  innerSlider = document.querySelector(".faktor-kecemasan-slider-inner"),
  pressed = false,
  startx,
  x;

function mouseEvent() {
  slider.addEventListener("mousedown", function (e) {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });
  slider.addEventListener("mouseenter", function () {
    slider.style.cursor = "grab";
  });
  slider.addEventListener("mouseup", function () {
    slider.style.cursor = "grab";
  });
  window.addEventListener("mouseup", function () {
    pressed = false;
  });

  slider.addEventListener("touchstart", function (e) {
    pressed = true;
    startx = e.touches[0].pageX - innerSlider.offsetLeft;
    // console.log(pressed, ' = TouchStart');
  });

  window.addEventListener("touchend", function () {
    pressed = false;
    // console.log(pressed, ' = touchend');
  });
}
mouseEvent();

function coordinate() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}

slider.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;
  innerSlider.style.left = `${x - startx}px`;
  coordinate();
});

slider.addEventListener("touchmove", function (e) {
  if (!pressed) return;
  e.preventDefault();
  x = e.touches[0].pageX;
  innerSlider.style.left = `${x - startx}px`;
  coordinate();
});

//make animation on scroll
function scrollTrigger(selector, options) {
  const trigger = document.querySelectorAll(selector);
  trigger.forEach((el) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(el);
  });
}

scrollTrigger(".animate-on-scroll", {
  rootMargin: "-250px 0px -250px 0px",
});