const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

WebFont.load({

  google: {
    families: [""]
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