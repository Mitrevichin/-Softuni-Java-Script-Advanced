function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let divised = sorted.slice((sorted.length / 2));
    return divised;

    // let newArr = [];

    // for (let i = 0; i < sorted.length; i++) {
    //     if (sorted.length % 2 === 0 || sorted.length % 2 === 1) {
    //         newArr = (sorted.slice((sorted.length / 2)));
    //     }

    // }
    // return newArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);