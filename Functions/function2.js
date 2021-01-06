//Demonstarating javascript fuvntions

const nshima = function(factor) {

    const ingridients = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }
}
ingridients(1, "cup", "mealie meal");
ingridients(0.5, "pot", "water");