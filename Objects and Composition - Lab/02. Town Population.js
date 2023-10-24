function townPopulation(input) {
    let output = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let tokens = line.split(' <-> ');

        let town = tokens[0];
        let population = Number(tokens[1]);

        if (!output[town]) {
            output[town] = 0;
        }

        output[town] += population;
    }
    Object.keys(output).forEach((x) => {
        console.log(`${x} : ${output[x]}`);
    });
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);