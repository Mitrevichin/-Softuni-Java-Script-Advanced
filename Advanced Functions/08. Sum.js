function subSum(arrNumbers, start, end) {
    if (!Array.isArray(arrNumbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, arrNumbers.length - 1);

    let sum = arrNumbers.slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);