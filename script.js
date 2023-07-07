document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;

    resetErrors();

    var isValid = true;

    if (name === '') {
        displayError('name', 'Please enter your name.');
        isValid = false;
    }

    if (email === '') {
        displayError('email', 'Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password === '') {
        displayError('password', 'Please enter your password.');
        isValid = false;
    } else if (password.length < 6) {
        displayError('password', 'Password should be at least 6 characters long.');
        isValid = false;
    }

    if (city === '') {
        displayError('city', 'Please enter your city.');
        isValid = false;
    }

    if (phone === '') {
        displayError('phone', 'Please enter your phone number.');
        isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
        displayError('phone', 'Please enter a valid phone number.');
        isValid = false;
    }

    // Simulating form submission and showing success message
    if (isValid) {
        setTimeout(function () {
            showMessage();
            document.getElementById('registration-form').reset();
        }, 2000);
    }
});

function displayError(field, message) {
    var errorElement = document.getElementById(field + '-error');
    errorElement.textContent = message;
}

function resetErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    return !isNaN(phone)
}

function showMessage() {
    var toast = document.getElementById("snackbar");
    toast.className = "showToast";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
}