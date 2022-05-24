function openNav() {
  console.log("I opened the menu");
  var menuBox =  document.getElementById("menuBox");
  menuBox.style.display = 'flex';
}

function closeNav() {
  console.log("I closed the menu");
  var menuBox =  document.getElementById("menuBox");
  menuBox.style.display = 'none';
}
