function moveLeft() {
  let left = parseInt(getComputedStyle(player).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    player.style.left = left + "px";
  }
}
function moveRight() {
  let left = parseInt(getComputedStyle(player).getPropertyValue("left"));
  left += 100;
  if (left < 300) {
    player.style.left = left + "px";
  }
}
let lefttap = document.getElementById("lefttap");
let righttap = document.getElementById("righttap");
lefttap.addEventListener("touchstart", moveLeft);
righttap.addEventListener("touchstart", moveRight);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});
var obstacle = document.getElementById("obstacle");
var counter = 0;
obstacle.addEventListener("animationiteration", () => {
  var position = parseInt(Math.random() * 3) * 100;
  obstacle.style.left = position + "px";
  counter++;

  if (counter > 5) {
    obstacle.style.animationDuration = "1.7s";
  } if (counter > 10) {
    obstacle.style.animationDuration = "1.5s";
  }if (counter > 15) {
    obstacle.style.animationDuration = "1.3s";
  }if (counter > 25) {
    obstacle.style.animationDuration = "1s";
  }
});

setInterval(function () {
  var playerLeft = parseInt(
    window.getComputedStyle(player).getPropertyValue("left")
  );
  var obstLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
  var obstTop = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("top")
  );
  if (playerLeft == obstLeft && obstTop >= 300 && obstTop < 450) {
    alert("GAME OVER  Your score : " + counter);
    obstacle.style.animation = "none";
  }
}, 1);
