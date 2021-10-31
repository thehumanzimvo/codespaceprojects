let buns = parseInt(prompt('2 + 2'));
if (buns === 4) {
    document.write('is 4, minus 1 is 3!')
} else {'math please!'}

var myName = document.getElementById('nameInput').value;
document.getElementById('updateName').onclick = function() {
    document.getElementById('nameUpdate').innerText = myName.split('').sort().join(''); 
}

colouring('red');
colouring('orange');
colouring('yellow');
colouring('green');
colouring('blue');
colouring('purple');
colouring('pink');





function colouring(colour) {
    document.getElementById(colour).onclick = function() {
        document.getElementById(colour).style.backgroundColor = colour;
        document.getElementById(colour).innerHTML = colour;
    }
}