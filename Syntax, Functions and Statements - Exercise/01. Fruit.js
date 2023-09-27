function fruity(fruit, weightInGrams, pricePerKilogram) {
    let weightInKg = weightInGrams / 1000;
    let totalPrice = pricePerKilogram * weightInKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}

fruity('orange', 2500, 1.80);