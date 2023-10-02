function evenPositionElements(arr) {
    let result = '';

    for (let index = 0; index < arr.length; index++) {
        if (index % 2 !== 1) {
            result += arr[index] + ' ';
        }
    }

    // arr.filter((x, i) => {
    //      if (i % 2 === 0) {
    //         result += x;
    //         result += ' ';
    //      }
    //      return result;
    // });

    console.log(result);
}

evenPositionElements(['20', '30', '40', '50', '60']);