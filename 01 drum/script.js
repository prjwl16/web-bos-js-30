async function play(event) {
  var audio;
  switch (event.keyCode) {
    case 65:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav"
      );
      audio.play();
      break;
    case 83:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
      );
      audio.play();
      break;
    case 68:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
      );
      audio.play();
      break;
    case 70:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav"
      );
      audio.play();
      break;
    case 71:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav"
      );
      audio.play();
      break;
    case 72:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav"
      );
      audio.play();
      break;
    case 74:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav"
      );
      audio.play();
      break;
    case 75:
      audio = new Audio(
        "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav"
      );
      audio.play();
      break;
    case 76:
      audio = new Audio("assets/src_01-javascript-drum-kit_sounds_snare.wav");
      audio.play();
      break;
    default:
      console.log("No sound");
  }
}

window.addEventListener("keydown", play);
