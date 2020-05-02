let flavor = sessionStorage.getItem("flavor");
let container = sessionStorage.getItem("container");

var duration = 1 * 1000;
var end = Date.now() + duration;

(function frame() {
  confetti({
  particleCount: 40,
  startVelocity: 10,
  spread: 360,
  ticks: 200,
  colors: ["#FFF7D6", "#E5FFE0", "#FFDFB8", "#E5DBFF", "#DC7676", "#ffd6e9"],
  origin: {
    x: Math.random(),
    y: Math.random() - 0.2
  }
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
 }
}());


window.onload = function() {
  if (flavor === "db") {
    document.getElementById("darkBrown").classList.remove("hidden");
  }

  if (flavor === "g") {
    document.getElementById("green").classList.remove("hidden");
  }

  if (flavor === "lb") {
    document.getElementById("lightBrown").classList.remove("hidden");
  }

  if (flavor === "pi") {
    document.getElementById("pink").classList.remove("hidden");
  }

  if (flavor === "pu") {
    document.getElementById("purple").classList.remove("hidden");
  }

  if (flavor === "y") {
    document.getElementById("yellow").classList.remove("hidden");
  }

  if (flavor === "o") {
    document.getElementById("orange").classList.remove("hidden");
  }

  if (container === "cu") {
    document.getElementById("cup").classList.remove("hidden");
  }

  if (container === "co") {
    document.getElementById("cone").classList.remove("hidden");
  }
}
