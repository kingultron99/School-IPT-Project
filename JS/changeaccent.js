function changeaccent() {
  var r = document.querySelector(':root');
  var v = document.getElementById('accentpicker').value;
  
  r.style.setProperty('--light-accent', v);
}