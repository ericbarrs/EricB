'use strict'
$(document).ready(function() {

  var data = {
    totalRevs: 0,
    totalScore: 0,
  }
  document.querySelector('#scratch').addEventListener('click', function() {
    var mediaElement = document.getElementById("audio");
    $("#disc").css({ 'transform': 'rotate(-5deg)'});
    $("#disc").css({ 'transform-duration': '2s'});
    data.totalScore += data.totalRevs;
    data.totalRevs = 0;
    mediaElement.currentTime -= 2.0;
  });
  document.querySelector('#tuneOut').addEventListener('click', function() {
    var mediaElement = document.getElementById("audio");
    data.totalScore += data.totalRevs;
    mediaElement.pause();
    mediaElement.currentTime += 2.0;
    setTimeout(function() {
    mediaElement.play();}, 1000);

  });
  document.querySelector('#play').addEventListener('click', function() {
    var mediaElement = document.getElementById("audio");
    mediaElement.play();
  });
  document.querySelector('#pause').addEventListener('click', function() {
    var mediaElement = document.getElementById("audio");
    mediaElement.pause();
  });
  document.querySelector('#rewind').addEventListener('click', function() {
    var mediaElement = document.getElementById("audio");
    mediaElement.currentTime = 0;
    mediaElement.play();
  });


$("#play").click(function(){ setInterval(turn,10);});
$("#pause").click(function(){
$("#disc").css({ 'transform': 'rotate(0deg)'});
  clearInterval(turn);});

function turn(){
$("#disc").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
data.totalRevs++;
console.log(data.totalRevs);
}


$("#pause").click(function (){
data.totalRevs = 0;
});

});
