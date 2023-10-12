function solve(arr) {
    let evenNumbers = [];

    arr.filter((x, i) => {
        if (i % 2 !== 0) {
            evenNumbers.push(x);
        }
    });
    
    return evenNumbers.map(x => x * 2).reverse().join(' '); 
}

solve([10, 15, 20, 25]);