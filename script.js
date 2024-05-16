const flyingBtn = document.querySelector(".confirm-btn");
console.log(flyingBtn);

flyingBtn.addEventListener("mouseover", moveHover);

function moveHover() {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;

  flyingBtn.style.left = i + "px";
  flyingBtn.style.top = j + "px";
}
