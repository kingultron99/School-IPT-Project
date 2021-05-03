function SwapContent(event, elem) {
  const element = document.getElementById(elem);
  console.log(element);
  element.parentNode.insertBefore(element, element.parentNode.firstChild);
}