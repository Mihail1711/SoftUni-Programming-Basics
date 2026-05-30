function fishingboat(budget, season, fisherman){
    let pricerent = 0;

    switch (season){
        case "Spring":
            pricerent = 3000;
            break;
        case "Summer": 
        case "Autumn":
            pricerent = 4200;
            break;
        case "Winter":
            pricerent = 2600;
            break;
    }

    if (fisherman <= 6){
        pricerent *= 0.90;
    } else if (fisherman >= 7 && fisherman <= 11){
        pricerent *= 0.85;
    } else if (fisherman >=12){
        pricerent *= 0.75;
    }

    if (fisherman % 2 === 0 && season !== 'Autumn'){
        pricerent *= 0.95
    }

    if (budget >= pricerent){
        console.log(`Yes! You have ${(budget - pricerent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(pricerent - budget).toFixed(2)} leva.`);
    }
}