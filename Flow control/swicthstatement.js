
//Using the switch statement in JavaScript
//chismitnick@github.com


let weather = "rainy";

function checkWeather(){
    switch (weather) {
        case "rainy":
            console.log("The weather is rainy, its not safe outside")
            break;
        case "sunny":
            console.log("Its sunny enough for a pininc outside")
        default:
            break;
    }

}

checkWeather();