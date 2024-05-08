//Zad2

alert("Hello World!");

//Zad6
var userName = prompt("Korneliusz");
alert("Witaj, " + userName + "!");

//Zad4

for (var i = 0; i <= 100; i += 2) {
    console.log(i);
}
//Zad8
{
var liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
var liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
var liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));

var najwieksza;

if (liczba1 >= liczba2 && liczba1 >= liczba3) {
    najwieksza = liczba1;
} else if (liczba2 >= liczba1 && liczba2 >= liczba3) {
    najwieksza = liczba2;
} else {
    najwieksza = liczba3;
}

console.log("Największa liczba to: " + najwieksza);

var najwiekszaParagraf = document.getElementById("najwieksza");
najwiekszaParagraf.innerHTML = "Największa liczba to: " + najwieksza;
}
//Zad9
{
function najwiekszyWspolnyDzielnik(a, b) {
    if (b === 0) {
        return a;
    } else {
        return najwiekszyWspolnyDzielnik(b, a % b);
    }
}

var liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
var liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

var wynik = najwiekszyWspolnyDzielnik(liczba1, liczba2);
alert("Największy wspólny dzielnik liczb " + liczba1 + " i " + liczba2 + " wynosi: " + wynik);
}

//Zad3
{
var a = 10;
var b = 20;
var c = 23.2;

var dodawanie = a + b + c;
var odejmowanie = a - b - c;
var mnozenie = a * b * c;
var dzielenie = a / b / c;


alert("Wynik dodawania: " + dodawanie);
alert("Wynik odejmowania: " + odejmowanie);
alert("Wynik mnożenia: " + mnozenie);
alert("Wynik dzielenia: " + dzielenie);


console.log("Wynik dodawania: " + dodawanie);
console.log("Wynik odejmowania: " + odejmowanie);
console.log("Wynik mnożenia: " + mnozenie);
console.log("Wynik dzielenia: " + dzielenie);


var dodawanieParagraf = document.getElementById("dodawanie");
var odejmowanieParagraf = document.getElementById("odejmowanie");
var mnozenieParagraf = document.getElementById("mnozenie");
var dzielenieParagraf = document.getElementById("dzielenie");


dodawanieParagraf.innerHTML = "Wynik dodawania: " + dodawanie;
odejmowanieParagraf.innerHTML = "Wynik odejmowania: " + odejmowanie;
mnozenieParagraf.innerHTML = "Wynik mnożenia: " + mnozenie;
dzielenieParagraf.innerHTML = "Wynik dzielenia: " + dzielenie;
}






