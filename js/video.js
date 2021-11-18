var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
   	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	video.currentTime += 15;
	if(video.currentTime >= video.duration || video.paused) {
		//video.pause();
		video.currentTime = 0;
		//video.play();
		console.log("Going back to the beginning");
	  }
	console.log("New location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	volume_value = document.querySelector("#slider").value;
	video.volume = volume_value / 100;
	document.querySelector("#volume").textContent = volume_value + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style");
});