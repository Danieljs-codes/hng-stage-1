function updateDateTime() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date();
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    days[date.getUTCDay()];
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    date.getTime();
}

updateDateTime();

setInterval(updateDateTime, 1000);
