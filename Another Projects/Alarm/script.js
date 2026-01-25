let alarmTime = null;
let alarmSound = new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg");
alarmSound.loop = true;

setInterval(() => {
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    document.getElementById("hour").textContent = hour.toString().padStart(2, "0");
    document.getElementById("minute").textContent = minute.toString().padStart(2, "0");
    document.getElementById("second").textContent = second.toString().padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;

    let currentTime = `${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}`;
    if (alarmTime === currentTime && second === 0) {
        alarmSound.play();
    }
}, 1000);

function setAlarm(event) {
    event.preventDefault();

    let input = document.getElementById("alarmTime").value;

    if (!input) {
        alert("Please select a time");
        return;
    }

    let [h, m] = input.split(":");
    h = Number(h);

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    alarmTime = `${h.toString().padStart(2,"0")}:${m}`;
    alert(`Alarm set for ${alarmTime} ${ampm}`);
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmTime = null;
    alert("Alarm stopped");
}