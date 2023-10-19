function addAndRemove(array) {
    let result = [];


    array.forEach((x, i) => {
        let currCommand = x;

        if (currCommand === 'add') {
            result.push(i + 1);

        } else if (currCommand === 'remove') {
            result.pop();
        }
    })

    // for (let i = 0; i < array.length; i++) {
    //     let currCommand = array[i];

    //     if (currCommand === 'add') {
    //         result.push(i + 1);

    //     } else if (currCommand === 'remove') {
    //         result.pop();
    //     }
    // }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }

    // if (result.every(x => x === undefined)) {
    //     console.log('Empty');
    // } else {
    //     console.log(result.join('\n'));
    // }


}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['remove',
    'remove',
    'remove']
);