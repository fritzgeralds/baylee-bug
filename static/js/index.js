const lol = document.getElementById("lol");
const plz = document.getElementById("plz-dont");

genLolz = () => {
	const lolz = new Audio("https://www.dischner.me/sounds/kiss_from_a_rose.mp3");
	lolz.play();
	let vid = document.createElement("video");
	vid.src = "https://www.dischner.me/video/lol.mp4";
	vid.autoplay = true;
	vid.style =
		"position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 100;";
	lol.appendChild(vid);
};

plz.addEventListener("click", genLolz);
