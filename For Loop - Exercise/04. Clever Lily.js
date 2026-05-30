function cleverlily(currage, washerprice, pricepertoy){
    let moneyfrombirthday = 0;
    let giftmoney = 10;
    let toycount = 0;
    let takenbrother = 0;

    for (age = 1; age <= currage; age++){
        if (age % 2 === 0){
            moneyfrombirthday += giftmoney;
            giftmoney += 10;
            takenbrother += 1;
        } else toycount++;
    }

    const totalmoney = moneyfrombirthday + toycount * pricepertoy - takenbrother;

    const diff = Math.abs(totalmoney - washerprice);

    if (totalmoney >= washerprice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}