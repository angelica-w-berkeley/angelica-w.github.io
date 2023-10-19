//import Swup from "swup";


//const swup = new Swup();



function unhideFlavor(flavorID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(flavorID).classList.remove("hidden");
}

document.getElementById("darkBrown").onclick = function() {
  unhideFlavor("darkCap");
}

document.getElementById("yellow").onclick = function() {
	unhideFlavor("yellowCap");
}

document.getElementById("green").onclick = function() {
	unhideFlavor("greenCap");
}

document.getElementById("orange").onclick = function() {
	unhideFlavor("orangeCap");
}

document.getElementById("purple").onclick = function() {
	unhideFlavor("purpleCap");
}

document.getElementById("lightBrown").onclick = function() {
	unhideFlavor("lightCap");
}

document.getElementById("pink").onclick = function() {
	unhideFlavor("pinkCap");
}

function closeFlavor(flavorID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(flavorID).classList.add("hidden");
}

function closeAllFlavor() {
	var flavorEl = document.getElementsByClassName('flavor');

	for (var i = 0; i < flavorEl.length; i++) {
		var id = flavorEl[i].id;
		closeFlavor(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllFlavor;

function chooseFlavor() {
  closeAllFlavor();
  document.getElementById("right").classList.remove("hidden");
	document.getElementById("next").classList.remove("hidden");
}

document.getElementById("db").onclick = function() {
	sessionStorage.setItem("flavor", "db");
	chooseFlavor();
}

document.getElementById("lb").onclick = function() {
	sessionStorage.setItem("flavor", "lb");
	chooseFlavor();
}

document.getElementById("g").onclick = function() {
	sessionStorage.setItem("flavor", "g");
	chooseFlavor();
}

document.getElementById("y").onclick = function() {
	sessionStorage.setItem("flavor", "y");
	chooseFlavor();
}

document.getElementById("o").onclick = function() {
	sessionStorage.setItem("flavor", "o");
	chooseFlavor();
}

document.getElementById("pi").onclick = function() {
	sessionStorage.setItem("flavor", "pi");
	chooseFlavor();
}

document.getElementById("pu").onclick = function() {
	sessionStorage.setItem("flavor", "pu");
	chooseFlavor();
}
