var disReturn = document.getElementById("display");

const calc = document.getElementById("calculator");
const buttons = document.getElementsByClassName("btn");


buttons.onclick = function (value) {
    disReturn += value;
}