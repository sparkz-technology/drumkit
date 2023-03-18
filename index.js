// Key click
document.addEventListener("keydown",function(Event){ 
    sound(Event.key)
    activeKey(Event.key)
})
//button  click
var noOfButton =document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfButton; i++) { 
document.querySelectorAll("button")[i].addEventListener("click",function () { 
 var buttonClick =this.innerHTML;
 sound(buttonClick)
 activeKey(buttonClick)
})}
// make sound
function sound(key) {
     
switch (key) {
    case "w":
        var tom1  = new Audio ("sounds/tom-1.mp3");   
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case"j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case"l":
        var kickbass = new Audio("sounds/kick-bass.mp3")
        kickbass.play();
        break;
    default:console.log(key)
}}
// anime
function activeKey(currentkey) {
  var activate= document.querySelector("."+currentkey);
  console.log(activate)
  activate.classList.add("pressed")
  setTimeout(function () {
    activate.classList.remove("pressed")
    },100)
}
