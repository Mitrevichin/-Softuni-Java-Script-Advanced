function sort(arr, str) {
    let numsArr = arr;
    let direction = str;

    if (direction === 'asc') {
        numsArr.sort((a, b) => a - b);
        // return a - b;
    } else if (direction === 'desc') {
        numsArr.sort((a, b) => b - a);
    }

    return numsArr;
}

sort([14, 7, 17, 6, 8], 'asc');