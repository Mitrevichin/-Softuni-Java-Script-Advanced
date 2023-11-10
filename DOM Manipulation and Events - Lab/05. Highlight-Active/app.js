function focused() {
    let divInputElement = document.querySelectorAll('input[type="text"]');
    
    const focusHandler = function(e) {
        e.currentTarget.parentElement.classList.add('focused')
    };
    
    const blurHandler = function(e) {
        console.log('focusedOut');
        e.currentTarget.parentElement.classList.remove('focused')
    };

    Array.from(divInputElement).forEach((x) => {
        x.addEventListener('focus', focusHandler)
        x.addEventListener('blur', blurHandler)
    });
}