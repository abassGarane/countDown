const countDown = () => {
  //future date to get time from
  const countDate = new Date('July 20,2021 00:00:00').getTime();
  //getting the current time
  const now = new Date().getTime();
  const gap = countDate - now;
  //converting the gap to days,hours,minutes and seconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  //counting from the above calcs
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  //   const hours = Math.floor(gap / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);
  console.log({
    days: days,
    hours: hours,
    seconds: seconds,
    minutes: minutes,
  });
  //update dom
  document.querySelector('.day').innerText = days;
  document.querySelector('.hour').innerText = hours;
  document.querySelector('.minute').innerText = minutes;
  document.querySelector('.second').innerText = seconds;

  //launch another function if gap gets below zero
  //   if (gap < 10000) {
  //     //launch a func
  //   }
};
setInterval(countDown, 1000);
