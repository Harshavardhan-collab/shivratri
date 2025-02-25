let countdown = document.querySelector("#countdown");
let celebrate = document.querySelector("#celebrate");
let message = document.querySelector("#message");

let targettime = new Date("2025-02-26T00:00:00").getTime();
let countdowninterval = setInterval(() => {
    let currenttime = new Date().getTime();
    let timeremaining = targettime - currenttime;
    let hours = Math.floor(timeremaining / (1000 * 60 * 60));
    let minutes = Math.floor((timeremaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeremaining % (1000 * 60)) / 1000);

    countdown.textContent = `${hours}:${minutes}:${seconds}`;

    if (timeremaining <= 0) {
        clearInterval(countdowninterval);
        countdown.textContent = `Shivratri has arrived`;

    }

}, 1000);

celebrate.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/happy-maha-shivratri-trisulam-hindu-600w-2420236163.jpg')";
    document.body.style.backgroundSize = "cover";
    // message.textContent=`HAPPY MAHA SHIVRATRI`;
    countdown.style.display = "none";
    celebrate.style.display = "none";


});