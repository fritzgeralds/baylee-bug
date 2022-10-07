let scrollpos = window.scrollY;
const header = document.querySelector(".main-nav");
const logo = document.querySelector(".main-nav__logo");
const header_height = header.offsetHeight;

window.addEventListener("scroll", () => {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    header.classList.add("scrolled");
    logo.classList.add("visible");
    return;
  }
  header.classList.remove("scrolled");
  logo.classList.remove("visible");
});

// window.addEventListener("click", () => {
// 	var devtools = function () {};
// 	devtools.toString = function () {
// 		if (!this.opened) {
// 			alert("Opened");
// 		}
// 		this.opened = true;
// 	};

// 	console.log("%c", devtools);
// });
// // devtools.opened will become true if/when the console is opened

// window.onresize = function (event) {
// 	$("#hero").css("width", $(window).width());
// };
