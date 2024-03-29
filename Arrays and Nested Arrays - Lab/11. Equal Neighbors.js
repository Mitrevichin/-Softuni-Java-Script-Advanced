function equalNeighbors(matrix) {
    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) {
                pairs++;
            }

            if (matrix[i + 1] && el === matrix[i + 1][j]) {
                pairs++;
            }
        });
    });
    console.log(pairs);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);