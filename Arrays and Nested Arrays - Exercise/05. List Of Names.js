function listOfNames(array) {

    let sortedArr = array
    .sort((a, b) => a.localeCompare(b))
    .forEach((x, i) => {
        console.log(`${i + 1}.${x}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);