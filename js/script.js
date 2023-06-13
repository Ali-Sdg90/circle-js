const circle = document.querySelector(".circle");
const score = document.querySelector("#score-container span");
circle.addEventListener("mouseover", func);

let scoreCounter = 0;

function func() {
    let x, y;

    x = Math.random() * 80 + 10;
    y = Math.random() * 80 + 10;

    circle.style.left = x + "%";
    circle.style.top = y + "%";
    circle.style.backgroundColor = getRandomLightColor();

    score.textContent = scoreCounter++;
}
func();

function getRandomLightColor() {
    let r = 55 + Math.round(200 * Math.random());
    let g = 55 + Math.round(200 * Math.random());
    let b = 55 + Math.round(200 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}
