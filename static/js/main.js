let scrollpos = window.scrollY;
const header = document.querySelector("header");
const nav = document.querySelector(".main-nav");
const mainNavLeft = document.querySelector(".main-nav__left");
const header_height = header.offsetHeight;

window.addEventListener("scroll", () => {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    nav.classList.add("scrolled");
    mainNavLeft.classList.add("visible");
    return;
  }
  nav.classList.remove("scrolled");
  mainNavLeft.classList.remove("visible");
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
