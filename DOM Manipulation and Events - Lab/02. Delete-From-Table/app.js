function deleteByEmail() {
    let inputElement = document.querySelector('[name=email]');
    let emailElement = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    let arrEmailElement = Array.from(emailElement);

    // I converted the emailElement into an array only because of the judje. It is not accepting forEach method without an array

    arrEmailElement.forEach(x => {
        if (x.textContent === inputElement.value) {
            x.parentElement.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    });
    inputElement.value = '';
}

