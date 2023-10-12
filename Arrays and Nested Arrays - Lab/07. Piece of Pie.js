function pieceOfPie(arrOfFlavours, targetFlavour1, targetFlavour2) {
    let indexTarget1 = arrOfFlavours.indexOf(targetFlavour1);
    let indexTarget2 = arrOfFlavours.indexOf(targetFlavour2);

    let newArr = arrOfFlavours.slice(indexTarget1, (indexTarget2 + 1));

    return newArr;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);