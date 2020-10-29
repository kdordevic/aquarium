import "./style.scss";
import $ from "jquery";

var fish1 = "<div class='fish1'><img src='fish5.png'></img></div>";
var fish2 = "<div class='fish2'><img src='fish2.png'></img></div>";
var fish3 = "<div class='fish3'><img src='fish1.png'></img></div>";
var plant1 = "<div class='plant1'><img src='plant1.png'></img></div>";
var plant2 = "<div class='plant2'><img src='plant2.png'></img></div>";
var plant3 = "<div class='plant3'><img src='plant3.png'></img></div>";
var fishes = "<div class='fishes'><img src='fishes.png'></img></div>";

$(".aquarium").append(fish1, fish2, plant1, plant2, plant3, fishes);

var fish4 = $(fish1)
  .clone()
  .css({ transform: "translatex(-500px) translatey(-50px) scale(0.6)" });
var plant4 = $(plant1).clone().css({
  transform: "translatex(450px) scale(0.8)",
});
var fishes1 = $(fishes).clone().css({
  transform: "translatex(300px) scale(1.5)",
  bottom: "200px",
});
var fishes2 = $(fishes).clone().css({
  transform: "translatex(-900px) scalex(-1)",
  bottom: "300px",
});
$(fishes2).toggleClass(" fishes fishes1");

var plant5 = $(plant2).clone().css({
  transform: " scale(1.5) ",
  left: "0px",
});

$(fish4).appendTo(".aquarium");
$(plant4).appendTo(".aquarium");
$(fishes1).appendTo(".aquarium");
$(fishes2).appendTo(".aquarium");
$(".aquarium").append(fish3);
$(plant5).appendTo(".aquarium");

setInterval(function () {
  var previousRight = parseInt($(".fish2").css("right"));
  $(".fish2").css("right", `${previousRight - 3}px`);
}, 70);
setInterval(function () {
  var previousRight1 = parseInt($(".fish1").css("right"));
  $(".fish1").css("right", `${previousRight1 + 3}px`);
}, 80);
setInterval(function () {
  var previousRight2 = parseInt($(".fish3").css("right"));
  $(".fish3").css("right", `${previousRight2 + 3}px`);
}, 100);
setInterval(function () {
  var previousRight3 = parseInt($(".fishes").css("right"));
  $(".fishes").css("right", `${previousRight3 + 3}px`);
}, 30);
setInterval(function () {
  var previousRight4 = parseInt($(".fishes1").css("right"));
  $(".fishes1").css("right", `${previousRight4 - 3}px`);
}, 30);

$(fishes1).on("click", function () {
  $(fishes1).prepend(`<p>Hello!!!</p>`);
});
