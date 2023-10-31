function storeCataloge(array) {

    let result = array.sort((a, b) => a.localeCompare(b));
    let firstChar = '';

    for (let index = 0; index < result.length; index++) {
        let currElement = result[index].split(' : ');
        
        if (currElement[0][0] !== firstChar) {
            console.log(currElement[0][0]);
        }

        console.log(`  ${currElement[0]}: ${currElement[1]}`);

        firstChar = currElement[0][0];
    }

}

storeCataloge(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
);