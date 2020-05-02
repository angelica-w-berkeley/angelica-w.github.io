//import Swup from "swup";
//const swup = new Swup();


function unhideContainer(container) {
	document.getElementById('overlay').classList.remove('hidden');
	document.getElementById(container).classList.remove("hidden");
}

document.getElementById("cups").onclick = function() {
  unhideContainer("cup");
}

document.getElementById("cones").onclick = function() {
  unhideContainer("cone");
}

function closeContainer(container) {
	document.getElementById('overlay').classList.add('hidden');
	document.getElementById(container).classList.add("hidden");
}

function closeAllContainer() {
	var containerEl = document.getElementsByClassName('container');

	for (var i = 0; i < containerEl.length; i++) {
		var id = containerEl[i].id;
		closeContainer(id);
	}
}

function chooseContainer() {
  closeAllContainer();
  document.getElementById("right").classList.remove("hidden");
	document.getElementById("next").classList.remove("hidden");
}

//var chose = document.getElementsByClassName("choose")
//for (var i = 0; i < chose.length; i++) {
  //chose[i].onclick = function() {
    //sessionStorage.setItem("container", chose[i].getAttribute("id"));
    //chooseContainer();
  //}
//}

document.getElementById("overlay").onclick = closeAllContainer;

document.getElementById("cu").onclick = function() {
	sessionStorage.setItem("container", "cu");
	chooseContainer();
}

document.getElementById("co").onclick = function() {
	sessionStorage.setItem("container", "co");
	chooseContainer();
}
