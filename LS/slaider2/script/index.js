const modal_container = document.querySelector(".modal_container");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal_container.classList.remove("close_status");
});

closeBtn.addEventListener("click", () => {
  modal_container.classList.add("close_status");
});