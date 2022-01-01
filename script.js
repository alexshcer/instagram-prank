document.querySelector(".emoji").style.display = "none";
$(window).on('load resize', function () {
  if ($(window).width() > 1024) {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "#221f1f";
    
    window.location = "https://www.google.com"

    document.querySelector(".img").style.display = "none";
    document.querySelector(".emoji").style.display = "none";
  }
});
setTimeout(function () {
  document.querySelector(".img").style.display = "none";
  document.querySelector(".emoji").style.display = "flex";
}, 7000);

//emoji
const emoji = document.querySelector(".emoji");
var display = document.getElementsByClassName("emoji");
var emojiList = ["🥳", "🤩", "👾", "😵", "😑", "🎮", "🖕"];
var i = 0;
var timer;

window.onload = function randomEmoji() {
  clearInterval(timer);

  // Call show Emoji to let it shows instanly.
  showEmoji();

  // Put showEmoji function to let it repeats
  timer = setInterval(function () {
    showEmoji();
  }, 50);
}

function showEmoji() {
  i = Math.floor(Math.random() * emojiList.length);
  emoji.innerHTML = emojiList[i];
}

setTimeout(function () {
  // clear interval timer to let it stops
  clearInterval(timer);
  emoji.innerHTML = emojiList[0]
}, 10000);

setTimeout(function () {
  var emoji = document.getElementById("emoji");
  var text = document.getElementById("text");
    emoji.classList.add("zoom");
    emoji.classList.add("move_up")
    text.classList.remove("hidden");
}, 12000);

/*
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

//setTimeout(function() { type(), erase() }, 12000);

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

*/
