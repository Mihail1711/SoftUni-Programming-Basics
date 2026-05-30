function NewHome(flowerType, count, budget) {
    let priceperflower = 0;
   

    switch (flowerType) {
      case "Roses":
        priceperflower = 5;
        break;
      case "Dahlias":
        priceperflower = 3.80;
        break;
      case "Tulips":
        priceperflower = 2.80;
        break;
      case "Narcissus":
        priceperflower = 3;
        break;
      case "Gladiolus":
        priceperflower = 2.50;
        break;   
    }
    
    let totalprice = priceperflower * count;

    if (flowerType === 'Roses' && count > 80){
        totalprice *= 0.90;
    } else if (flowerType === 'Dahlias' && count > 90){
        totalprice *= 0.85;
    } else if (flowerType === 'Tulips' && count > 80){
        totalprice *= 0.85;
    } else if (flowerType === 'Narcissus' && count < 120){
        totalprice *= 1.15;
    } else  if (flowerType === 'Gladiolus' && count < 80){
        totalprice *= 1.20;
    }

    if (budget >= totalprice){
        console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - totalprice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalprice - budget).toFixed(2)} leva more.`);
    }
      
}
    

