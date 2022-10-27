const lol = document.getElementById("lol");
const plz = document.getElementById("plz-dont");
const sad = document.getElementById("sad-face");
const jams = new Audio("https://www.dischner.me/sounds/kiss_from_a_rose.mp3");

genjams = () => {
	jams.play();
	let vid = document.createElement("video");
	vid.src = "https://www.dischner.me/video/lol.mp4";
	vid.autoplay = true;
	vid.style =
		"position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 100; object-fit: cover;";
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

plz.addEventListener("click", genjams);
sad.addEventListener("click", genSad);
