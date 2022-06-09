console.log("working-with-classes.js");

function menuClicked(currEl) {
  let menuitem = document.getElementsByClassName("menu-item");

  for (let i = 0; i < menuitem.length; i++) {
    menuitem[i].classList.remove("active");
  }
  currEl.classList.add("active");
}
