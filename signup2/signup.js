let modal = document.getElementById("mymodal");
let btn = document.getElementsByClassName("mybtn")[0];
let close = document.getElementsByClassName("close-modal")[0];
btn.onclick = function () {
  modal.style.display = "flex";
};
close.onclick = function () {
  modal.style.display = "none";
};
