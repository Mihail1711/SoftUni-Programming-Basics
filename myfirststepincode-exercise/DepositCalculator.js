function DepositCalculator(deposit, timeinmonths, interest){
    let suminterest = deposit * (interest / 100);
    let interestformonth = suminterest / 12;
    let finalysum = deposit + (timeinmonths * interestformonth);

    console.log(finalysum)

}