const buttons = document.querySelectorAll(".btn");
const searchEl = document.querySelector("#search");
const boxEl = document.querySelectorAll(".box");

searchEl.addEventListener("keyup", (event) => {
  const searchText = event.target.value.toLowerCase().trim();
  boxEl.forEach((box) => {
    const data = box.dataset.list;
    if (data.includes(searchText)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  buttons[0].classList.add("btn-clicked");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    setActive(e);
    const btnFilter = e.target.dataset.btn;
    boxEl.forEach((event) => {
      const boxFilter = event.dataset.list;
      if (btnFilter == "all") {
        event.style.display = "block";
      } else {
        if (btnFilter == boxFilter) {
          event.style.display = "block";
        } else {
          event.style.display = "none";
        }
      }
    });
  });
});

function setActive(e) {
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}
