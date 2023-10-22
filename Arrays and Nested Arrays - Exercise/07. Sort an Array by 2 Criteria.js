function solve(array) {

    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sorted.forEach((x) => console.log(x));

}

solve(['alpha',
    'beta',
    'gamma']
);