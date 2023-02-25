document.querySelector(".img1").addEventListener("click", function () {
  document.querySelector(".cows").style.display = "block";
  document.querySelector(".img1").style.display = "none";
  document.querySelector(".pos1").style.display = "none";
});
document.querySelector(".cross1").addEventListener("click", function () {
  document.querySelector(".cows").style.display = "none";
  document.querySelector(".img1").style.display = "block";
  document.querySelector(".pos1").style.display = "block";
});
//buffaloes
document.querySelector(".img2").addEventListener("click", function () {
  document.querySelector(".buff").style.display = "block";
  document.querySelector(".img2").style.display = "none";
  document.querySelector(".pos2").style.display = "none";
});
document.querySelector(".cross2").addEventListener("click", function () {
  document.querySelector(".buff").style.display = "none";
  document.querySelector(".img2").style.display = "block";
  document.querySelector(".pos2").style.display = "block";
});
//dogs
document.querySelector(".img3").addEventListener("click", function () {
  document.querySelector(".dogs").style.display = "block";
  document.querySelector(".img3").style.display = "none";
  document.querySelector(".pos3").style.display = "none";
});
document.querySelector(".cross3").addEventListener("click", function () {
  document.querySelector(".dogs").style.display = "none";
  document.querySelector(".img3").style.display = "block";
  document.querySelector(".pos3").style.display = "block";
});
