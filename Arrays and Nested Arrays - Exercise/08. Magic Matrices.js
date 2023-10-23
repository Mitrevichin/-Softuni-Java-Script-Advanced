function solve(matrix) {
    let isMagical = true;
    let rowSum = 0;
    let colSum = 0;

    for (let index = 0; index < matrix.length; index++) {
        let currArr = matrix[index];

        for (let j = 0; j < currArr.length; j++) {
            let currElement = currArr[j];
            rowSum += currElement;
            colSum += currArr[0];
        }
    }

    if (rowSum === colSum) {
        console.log(isMagical);
    } else {
        console.log(!isMagical);
    }
}

solve([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
);