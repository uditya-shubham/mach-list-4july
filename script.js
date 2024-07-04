function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    var timeString = hours + ":" + minutes;

    document.getElementById("time").innerHTML = timeString;
}

setInterval(displayTime, 60000);
window.onload = displayTime;