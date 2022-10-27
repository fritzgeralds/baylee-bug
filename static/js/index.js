const lol = document.getElementById("lol");
const plz = document.getElementById("plz-dont");
const sad = document.getElementById("sad-face");
const jams = new Audio("https://www.dischner.me/sounds/kiss_from_a_rose.mp3");
const ban = document.getElementById("banner");
const baby = document.getElementById("baby");


genJams = () => {
	jams.play();
	let vid = document.createElement("video");
	vid.src = "https://www.dischner.me/video/lol.mp4";
	vid.autoplay = true;
	vid.style =
		"position: absolute; top: 0; left: 0; z-index: 100; height: 100%; width: 100%; object-fit: fill;";
	vid.addEventListener("ended", () => {
		sad.classList.toggle("hide");
		plz.classList.toggle("hide");
		lol.removeChild(vid);
	});
	lol.appendChild(vid);

};

genSad = () => {
	jams.pause();
	jams.currentTime = 0;
	sad.classList.toggle("hide");
	plz.classList.toggle("hide");
};

plz.addEventListener("click", genJams);
sad.addEventListener("click", genSad);


function babySharkDooDooDooDooDooDoo() {
	if (baby.currentTime > 0) {
		baby.pause();
		baby.currentTime = 0;
		return;
	}
	baby.play();
};

ban.addEventListener("click", babySharkDooDooDooDooDooDoo);


