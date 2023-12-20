function argument() {
    let result = {};

    Array.from(arguments).forEach(line => {
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (!result[type]) {
            result[type] = 0;
        }
        result[type]++;
    });

    Object.keys(result)
    .sort((a, b) => b[1] - a[1])
    .forEach(key => console.log(`${key}: ${result[key]}`));
}

argument('cat', 42, function () { console.log('Hello world!'); });