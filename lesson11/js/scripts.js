const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

WebFont.load({

  google: {
    families: ["https://fonts.googleapis.com/css?family=Roboto&display=swap, https://fonts.googleapis.com/css?family=Lato&display=swap"]
  }

});

var Now = new Date();
var CurrentDay = Now.getDay();
if (CurrentDay == 0) {
  $('#colord').show()
} else if (CurrentDay !== 1) {
  $('#colord').show();
} else if (CurrentDay !== 2) {
  $('#colord').show();
} else if (CurrentDay !== 3) {
  $('#colord').show();
}