tapped('0');
tapped('1');
tapped('2');
tapped('3');
tapped('4');
tapped('5');
tapped('6');
tapped('7');
tapped('8');
tapped('9');

tapped('/');
tapped('*')
tapped('-')
tapped('%')
tapped('=')
tapped('+')

let buns = [[1, 2], [3, 4], [5, 6], [7, 8]]


let firstValue = 0;

let cal = document.getElementById('adisplay').innerText;
let gir = 'hello'

function tapped(value) {
    document.getElementById(value).onclick = function () {
        cal = document.getElementById('adisplay').innerText += value//intCheck(value);
        console.log(cal);
    }
}

function intCheck(value) {
    if (typeof parseInt(value) == typeof 1) {
        value = parseInt(value);
        console.log('its an int')
    } else {console.log('not an int') }
    // console.log(typeof cal);
    return value;
}



document.getElementById('del').onclick = function() {
    cal = cal.slice(0, -1);
    cal;
    // gir = gir.slice(0, -1);
    console.log(`del pressed ${cal}`);
}

function makeCal() {
    firstValue = cal;
}