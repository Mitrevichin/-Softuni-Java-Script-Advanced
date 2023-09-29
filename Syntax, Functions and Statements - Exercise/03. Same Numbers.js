function sameNumbers(number) {
    let numberAsString = number.toString();
    let sum = 0;
    let isSame = true;
    let compareDigit = Number(numberAsString[0]);

    for (let i = 0; i < numberAsString.length; i++) {
        let currNumber = Number(numberAsString[i]);
        sum += currNumber;

        if (currNumber !== compareDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);