function petShop(dogFoodCount, catFoodCount) {
    const dogPrice = 2.5;
    const catPrice = 4;

    // 1
    const dogSum = dogFoodCount * dogPrice;
    const catSum = catFoodCount * catPrice;
    
    let totalSum = dogSum + catSum;

    //2
    //let totalSum =(dogFoodCount * dogPrice) + (catFoodCount * catPrice);

    console.log(totalSum + " lv.");
}
petShop(5, 4);