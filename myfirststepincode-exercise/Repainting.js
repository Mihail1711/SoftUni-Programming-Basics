function Repainting(nilonNeeded, paintNeeded, liquitNeeded, Workerhoursprice){
    const pricenilon =(nilonNeeded + 2) * 1.50;
    const pricepaint = (paintNeeded * 1.10)* 14.50;
    const priceliquit =liquitNeeded * 5;
    const pricebag = 0.40;

    const materialSum = pricenilon + pricepaint + priceliquit + pricebag;
    const workersum = Workerhoursprice * (materialSum * 0.30);

    const totalSum = materialSum + workersum;
    console.log(totalSum)

}
///Предпазен найлон - 1.50 лв. за кв. метър
//Боя - 14.50 лв. за литър
//Разредител за боя - 5.00 лв. за литър