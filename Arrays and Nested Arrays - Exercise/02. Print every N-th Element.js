function solve(arr, n) {
    let newArr = [];

    for (let index = 0; index < arr.length; index += n) {
        newArr.push(arr[index]);

    }
    return newArr;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);