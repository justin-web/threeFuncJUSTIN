function myFunction() {
  window.open("index2.html");
}

function clickImg() {
	window.open("index2.html");
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function playSound() {
	var sound = document.getElementById("audio");
    sound.play();
}

var p = document.getElementById("Rickroll")
	var audio = new Audio('audio/rickroll.mp3')

function playRickRoll() {
	audio.play();
	window.open('index4.html')
}