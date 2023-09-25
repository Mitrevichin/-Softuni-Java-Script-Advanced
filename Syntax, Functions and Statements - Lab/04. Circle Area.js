function circleArea(number) {
    let type = typeof number;
    let area;

    if (type === 'number') {
        area = Math.PI * (number ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);