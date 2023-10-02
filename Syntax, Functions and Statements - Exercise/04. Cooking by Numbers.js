function cooking(stringNumber, p1, p2, p3, p4, p5) {
    let startingNumber = Number(stringNumber);
    let arrofCommands = [p1, p2, p3, p4, p5];

    let chop = function (startingNumber) {
        return startingNumber / 2;
    }
    let dice = function (startingNumber) {
        return Math.sqrt(startingNumber);
    }
    let spice = function (startingNumber) {
        return startingNumber + 1;
    }
    let bake = function (startingNumber) {
        return startingNumber * 3;
    }
    let fillet = function (startingNumber) {
        return startingNumber * 0.80;
    }

    for (let index = 0; index < arrofCommands.length; index++) {
        const currCommand = arrofCommands[index];

        switch (currCommand) {
            case 'chop':
                startingNumber = chop(startingNumber);
                console.log(startingNumber);
                break;
            case 'dice':
                startingNumber = dice(startingNumber);
                console.log(startingNumber);
                break;
            case 'spice':
                startingNumber = spice(startingNumber);
                console.log(startingNumber);
                break;
            case 'bake':
                startingNumber = bake(startingNumber);
                console.log(startingNumber);
                break;
            case 'fillet':
                startingNumber = fillet(startingNumber);
                console.log(startingNumber);
                break;
        }
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');