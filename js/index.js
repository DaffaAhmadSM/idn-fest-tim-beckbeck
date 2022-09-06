const jumpTo = (id) => {
  document.getElementsByClassName(id)[0].scrollIntoView({
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
