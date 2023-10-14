function diagonalSum(matrix) {
    let primarySum = 0;
    let secondarySum = 0;

    let elementIndex = 0;

    matrix.forEach(row => {
        primarySum += row[elementIndex];
        secondarySum += row[row.length - 1 - elementIndex];

        elementIndex++;
    })
    console.log(primarySum + ' ' + secondarySum);
}

diagonalSum([[20, 40],
             [10, 60]]
);