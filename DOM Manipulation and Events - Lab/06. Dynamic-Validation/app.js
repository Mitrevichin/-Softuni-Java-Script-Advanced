function validate() {
    let inputElemement = document.getElementById('email');

    inputElemement.addEventListener('change', function (e) {
        let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

        if (pattern.test(e.currentTarget.value)) {
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add('error');
        }
    });
}

