function sum(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    return firstElement + lastElement;
}

sum(['20', '30', '40']);