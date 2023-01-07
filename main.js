function renderClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    // Add leading zeros to single-digit values
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
  
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(renderClock, 1000);

  const fakeAlarms = [{hour: 5, minute: 50, period: 'am'}];

function renderAlarm(alarm) {
  const { hour, minute, period } = alarm;
  const alarmElement = document.createElement('div');
  alarmElement.innerHTML = `
    <div class="alarm">
      <div class="alarm-time">${hour}:${minute} ${period}</div>
      <div class="alarm-actions">
        <button class="btn snooze">Snooze</button>
        <button class="btn dismiss">Dismiss</button>
      </div>
    </div>
  `;
  return alarmElement;
}

const alarmsSection = document.getElementById('alarms');
fakeAlarms.forEach(alarm => {
  const alarmElement = renderAlarm(alarm);
  alarmsSection.appendChild(alarmElement);
});
function addAlarm() {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const periodInput = document.getElementById('period');
  
    const hours = hoursInput.value;
    const minutes = minutesInput.value;
    const period = periodInput.value;
  
    fakeAlarms.push({ hours, minutes, period });


    const form = document.getElementById('add-alarm-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  addAlarm();
});

function checkAlarms() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    fakeAlarms.forEach(alarm => {
      if (alarm.hours === hours && alarm.minutes === minutes) {
        const alarmSound = document.getElementById('alarm-sound');
        alarmSound.play();
      }
    });
  }
  
  setInterval(checkAlarms, 1000);
  

  }