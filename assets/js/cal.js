var disReturn = document.getElementById("display");
var value1 = null;
var total;

const calc = document.getElementById("calculator");
const buttons = document.getElementsByClassName("btn");
const perts = document.getElementsByClassName("function");

onload.preventDefault();


buttons.onclick = function (value) {
    if ((disReturn.value != null) || (disReturn.value = 0)) {
        disReturn.value += ((disReturn.value * 10) + value);
    }
    else {
        disReturn.value = value;
    }

}

perts.onclick = function (value) {
    disReturn.innerHTML = value;
    if (value1 == null) {
        value1 = disReturn.value;
        disReturn.value = 0;
        disReturn.innerHTML = value;
    }

    else {
        switch (value) {
            case '+':
                total += value1;
                disReturn.value = 0;
                disReturn.innerHTML = value;
                break;
            case '-':
                total -= value1;
                disReturn.value = 0;
                disReturn.innerHTML = value;
                break;
            case '*':
                total *= value1;
                disReturn.value = 0;
                disReturn.innerHTML = value;
                break;
            case '/':
                total /= value1;
                disReturn.value = 0;
                disReturn.innerHTML = value;
                break;
            default:
                console.log('error');
        }
    }

}

calc.onclick = function () {
    let value = disReturn.innerHTML.charAt(0);
    switch (value) {
        case '+':
            total += value1;
            disReturn.value = total;
            disReturn.innerHTML = total;
            break;
        case '-':
            total -= value1;
            disReturn.value = total;
            disReturn.innerHTML = total;
            break;
        case '*':
            total *= value1;
            disReturn.value = total;
            disReturn.innerHTML = total;
            break;
        case '/':
            total /= value1;
            disReturn.value = total;
            disReturn.innerHTML = total;
            break;
        default:
            console.log('error');
    }
}



