// Zadanie 1
var form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    // walidacja formularza
    // ...
    event.preventDefault();
});

// Zadanie 2
var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    if (password !== password2) {
        alert('Hasła nie są takie same!');
        event.preventDefault();
    }
});

// Zadanie 3
var loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    // walidacja formularza
    // ...
    event.preventDefault();
});

// Zadanie 4
function validateBirthdate(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18; // osoba musi być pełnoletnia
}

// Zadanie 5
var loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    // walidacja formularza
    // ...
    event.preventDefault();
});

// Zadanie 6
var myForm = document.getElementById('myForm');
myForm.addEventListener('change', function(event) {
    var country = document.getElementById('country').value;
    var state = document.getElementById('state');
    if (country === 'Polska') {
        state.type = 'select';
        state.options = ['Podkarpackie', 'Mazowieckie', 'Małopolskie'];
    } else {
        state.type = 'text';
    }
});

// Zadanie 7
var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    if (password !== password2) {
        alert('Hasła nie są takie same!');
        event.preventDefault();
    } else {
       
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/your-endpoint', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: password,
        }));
    }
});

// Zadanie 8
var myForm = document.getElementById('myForm');
myForm.addEventListener('change', function(event) {
    var phone = document.getElementById('phone');
    phone.type = 'text';
    phone.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});
