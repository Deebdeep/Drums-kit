// code for button pressed via mouse
for(var i=0;i<8;i++)
{
  document.querySelectorAll(".drum" )[i].addEventListener("click",clicked);
}
function clicked()
{

  var buttoni = this.innerHTML;
  keypressinged(buttoni);
  buttonAnimation(buttoni);


//code for keys pressed via Keyboard
}
document.addEventListener("keypress",keyClicked);

function keyClicked(event)
{
  keypressinged(event.key);
  buttonAnimation(event.key);
}

function keypressinged(key)
{
  switch (key) {
    case "w":
    var audi1 = new Audio("sounds/crash.mp3");
    audi1.play();
    break;
    case "a":
    var audi2 = new Audio("sounds/kick-bass.mp3");
    audi2.play();
    break;
    case "s":
    var audi3 = new Audio("sounds/snare.mp3");
    audi3.play();
    break;
    case "d":
    var audi4 = new Audio("sounds/tom-1.mp3");
    audi4.play();
    break;
    case "j":
    var audi5 = new Audio("sounds/tom-2.mp3");
    audi5.play();
    break;
    case "k":
    var audi6 = new Audio("sounds/tom-3.mp3");
    audi6.play();
    break;
    case "l":
    var audi7 = new Audio("sounds/tom-4.mp3");
    audi7.play();
    break;
    case "b":
    var audi8 = new Audio("sounds/bum.mp3");
    audi8.play();
    break;
    default:
    console.log(alert("pressed the worng key - " +key));
  }
}

function buttonAnimation(evnt)
{
var activebut = document.querySelector("." + evnt);
activebut.classList.add("pressed");

setTimeout(function() {
  activebut.classList.remove("pressed");},100);
}
