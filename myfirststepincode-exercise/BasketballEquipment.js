function BasketballEquipment(yearliPriceTrainings){
    const sneakers = yearliPriceTrainings * 0.60;
    const outfit = sneakers * 0.80;
    const ball = outfit / 4;
    const accessories = ball / 5;
    
    const totalSum = yearliPriceTrainings + sneakers + outfit + ball + accessories;
    console.log(totalSum);
 
}
BasketballEquipment(356)