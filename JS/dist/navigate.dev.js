"use strict";

var navcontent = document.getElementsByClassName("nav-content");
var active = document.getElementById("slider");

for (var i = 0; i < navcontent.length; i++) {
  navcontent[i].addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    active.classList.add("sliding");
    setTimeout(function () {
      active.classList.remove("sliding");
    }, 100);
    scrollTo();
  });
}

function scrollTo() {
  var content = document.getElement;

  for (var _i = 0; _i < content; _i++) {
    console.log(this);
  }
}