const onEverySecond = () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
  const date = new Date();
  const seconds = date.getSeconds();
  const secondDegrees = seconds * 6 + 270;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  console.log(seconds);
  const mins = date.getMinutes();
  const minuteDegrees = mins * 6 + 270;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  const hours = date.getHours();
  const hourDegrees = hours * 30 + 270;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(onEverySecond, 1000);
