let hour = document.querySelector(".hour_hand");
let minute = document.querySelector(".minute_hand");
let second = document.querySelector(".sec_hand");

function Displaytime() {
    const data = new Date();
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();

    let hhrotation = 30 * hh + 0.5 * mm + ss / 60;
    let mmrotation = 6 * mm + ss / 10;
    let ssrotation = 6 * ss;

    hour.style.transform = `rotate(${hhrotation}deg)`;
    minute.style.transform = `rotate(${mmrotation}deg)`;
    second.style.transform = `rotate(${ssrotation}deg)`;
}

// Call the function every second
setInterval(Displaytime, 1000);
