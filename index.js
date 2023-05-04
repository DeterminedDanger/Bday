const Bday = "27 May 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

function countdown() {
  const currentDate = new Date();
  const BdayDate = new Date(Bday);
  const totalsec = (BdayDate - currentDate) / 1000;
  const days = Math.floor(totalsec / 3600 / 24);
  const hours = Math.floor(totalsec / 3600) % 24;
  const mins = Math.floor(totalsec / 60) % 60;
  const sec = Math.floor(totalsec) % 60;
  console.log(days, hours, mins, sec);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secEl.innerHTML = formatTime(sec);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
