"use strict";

var navv = document.getElementById("navvertical");
var navh = document.getElementById("navhorizontal");
var pagetitle = document.getElementById("title");
var navtoggle = document.getElementById("navbarcheckbox");

function togglenav() {
  navv.classList.toggle("minimized");
  title.classList.toggle("min");
}

function closenavbar() {
  if (!navv.classList.contains("minimized")) {
    navv.classList.add("minimized");
    title.classList.add("min");
  }
}

function changenav() {
  if (navtoggle.checked) {
    navv.style.display = "none";
    navh.style.display = "block";
    toggler.style.display = "none";
    pagetitle.style.display = "none";
  } else {
    navv.style.display = "block";
    navh.style.display = "none";
    toggler.style.display = "block";
    pagetitle.style.display = "block";
  }
}