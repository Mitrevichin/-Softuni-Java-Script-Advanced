function rotateArr(array, number) {

    for (let index = 0; index < number; index++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
}

rotateArr(['1', '2', '3', '4'], 2);