var disReturn = document.getElementById("display");
var value1 = null;
var value2 = null;
var total;

const calc = document.getElementById("calculator");
const buttons = document.getElementsByClassName("btn");
const perts = document.getElementsByClassName("function");

onload.preventDefault();


buttons.onclick = function (value) {
    if (disReturn.value != null) {
        ((disReturn.value * 10) + value);
    }
    else {
        disReturn.value = value;
    }

    disReturn.innerHTML += value;

}

perts.onclick = function (value) {
    disReturn.innerHTML = value;
    if (value1 == null) {
        value1 = disReturn.value;
        disReturn.value = 0;
    }
    else if ((value1 != null) & (value2 == null)) {
        value2 = dis.disReturn.value;
        disReturn.value = 0;
    }
    else {
        switch (value) {
            case '+':
                total = value1 + value2;
                break;
            case '-':
                total = value1 - value2;
                break;
            case '*':
                total = value1 * value2;
                break;
            case '/':
                total = value1 / value2;
                break;
            default:
                console.log('error');
        }
    }

}

calc.onclick = function () {
    disReturn.innerHTML = total
}



