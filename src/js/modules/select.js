const select = ()=> {
  const selectElements = document.querySelectorAll(".select");

  selectElements.forEach((item) => {
    const topEl = item.querySelector(".select-head");
    const wrapperEl = item.querySelector(".select-body");

    topEl.addEventListener("click", () => {
      if (item.classList.contains("select--active")) {
        wrapperEl.style.maxHeight = null;
        item.classList.remove("select--active");
      } else {
        selectElements.forEach((item) => {
          const wrapperElLocal = item.querySelector(".select-body");
          item.classList.remove("select--active");
          wrapperElLocal.style.maxHeight = null;
        });
        wrapperEl.style.maxHeight = `${wrapperEl.scrollHeight + 2}px`;
        item.classList.add("select--active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (e && e.target)
      if (!e.target.closest(".select"))
        selectElements.forEach((item) => {
          const wrapperEl = item.querySelector(".select-body");
          item.classList.remove("select--active");
          wrapperEl.style.maxHeight = null;
        });
  });
}
export default select;
