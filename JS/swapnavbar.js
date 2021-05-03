let toggler = document.getElementById("toggler");

if (navh.style.display.includes("block")) {
  toggler.style.display = "none";
  pagetitle.style.display = "none";
}
else {
  toggler.style.display = "block";
  pagetitle.style.display = "block";
}