//Zad 1a
for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");

//Zad 1b
var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Happy New Year!");

//Zad 2
function silnia(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}

var liczba = parseInt(prompt("Podaj liczbę całkowitą:"));
alert("Silnia liczby " + liczba + " wynosi: " + silnia(liczba));

//Zad 3
window.onload = function() {
    var wiek = parseInt(prompt("Podaj swój wiek:"));
    if (wiek < 18) {
        window.location.href = "https://www.w3schools.com/jsref/met_win_open.asp";
    }
}
