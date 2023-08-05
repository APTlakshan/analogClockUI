setInterval(() => {
    const deg = 6;

    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    const date = new Date();

    var hours = date.getHours() * 30;
    var minutes = date.getMinutes() * deg;
    var seconds = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hours + (minutes / 12))}deg)`;
    mn.style.transform = `rotateZ(${minutes}deg)`;
    sc.style.transform = `rotateZ(${seconds}deg)`;
}, 1000);

