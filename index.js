document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('toggle-password');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmation');

    togglePasswordIcon.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordIcon.classList.toggle('ri-eye-line', type === 'password');
        togglePasswordIcon.classList.toggle('ri-eye-off-line', type === 'text');
    });

    function validateForm() {
        const password = passwordInput.value;
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        const isPasswordValid = /^[a-zA-Z]+$/.test(password) && password.length >= 8;
        const isFirstNameValid = firstName.length > 0;
        const isLastNameValid = lastName.length > 0;

        if (!isPasswordValid) {
            passwordInput.setCustomValidity('Password must contain only alphabetic characters and be at least 8 characters long.');
        } else {
            passwordInput.setCustomValidity('');
        }

        if (!isFirstNameValid || !isLastNameValid) {
            if (!isFirstNameValid) {
                firstNameInput.setCustomValidity('First name cannot be empty.');
            } else {
                firstNameInput.setCustomValidity('');
            }

            if (!isLastNameValid) {
                lastNameInput.setCustomValidity('Last name cannot be empty.');
            } else {
                lastNameInput.setCustomValidity('');
            }
        } else {
            firstNameInput.setCustomValidity('');
            lastNameInput.setCustomValidity('');
        }
    }

    form.addEventListener('submit', function (event) {
        validateForm();

        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill in the required fields correctly.');
        } else {
          alert("your form is submitted sucessfully!");

        }
    });

    passwordInput.addEventListener('input', validateForm);
    firstNameInput.addEventListener('input', validateForm);
    lastNameInput.addEventListener('input', validateForm);
});
