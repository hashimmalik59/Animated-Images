function plus1() {
  let zoomIn1 = document.querySelector("#img1");
  let zoomIn2 = document.querySelector("#img2");
  let zoomIn3 = document.querySelector("#img3");
  zoomIn1.style.width = "50%";
  zoomIn2.style.width = "24%";
  zoomIn3.style.width = "25%";
  zoomIn1.style.transition = "all ease-in-out 0.75s";
}
function plus2() {
  let zoomIn1 = document.querySelector("#img1");
  let zoomIn2 = document.querySelector("#img2");
  let zoomIn3 = document.querySelector("#img3");
  zoomIn1.style.width = "24%";
  zoomIn2.style.width = "50%";
  zoomIn3.style.width = "25%";
  zoomIn2.style.transition = "all ease-in-out 0.75s";
}
function plus3() {
  let zoomIn1 = document.querySelector("#img1");
  let zoomIn2 = document.querySelector("#img2");
  let zoomIn3 = document.querySelector("#img3");
  zoomIn1.style.width = "25%";
  zoomIn2.style.width = "25%";
  zoomIn3.style.width = "49%";
  zoomIn3.style.transition = "all ease-in-out 0.75s";
}
