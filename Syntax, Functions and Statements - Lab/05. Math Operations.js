function solve(num1, num2, operation) {
    let result;

    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        result = num1 / num2;
    } else if (operation === '%') {
        result = num1 % num2;
    } else if (operation === '**') {
        result = Math.pow(num1, num2);
    }

    console.log(result);
}

solve(3, 5.5, '*');