var number0ofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < number0ofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      // what to do when click detected
      //alert("I got clicked!");

      //console.log(this.innerHTML);

      //cand se apasa pe buton se schimba culoarea in alb
      // this.style.color="white";

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
  }

  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });


  function makeSound(key){
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
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

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break; 

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        
      case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break; 

      default: console.log(buttonInnerHTML);
        break;
    }
  }

  function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
