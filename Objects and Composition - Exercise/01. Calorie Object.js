function solve(input) {
    let objResult = {};
    let name;
    let calories;

    input.forEach((x, i) => {
        if (i % 2 === 0) {
            name = x;
        } else {
            calories = Number(x);
        }
        objResult[name] = calories
    });
    console.log(objResult);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);