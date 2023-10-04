function solve(arr) {
    let newArr = [];

    arr.filter(function(x) {
        if (x < 0) {
            newArr.unshift(x);
        } else {
            newArr.push(x);
        }
    });

    for (const iterator of newArr) {
        console.log(iterator);
    }

    // console.log(newArr.join('\n'));
}

solve([7, -2, 8, 9]);