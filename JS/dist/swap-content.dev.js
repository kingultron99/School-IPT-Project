"use strict";

function SwapContent(event, elem) {
  var element = document.getElementById(elem);
  console.log(element);
  element.parentNode.insertBefore(element, element.parentNode.firstChild);
}