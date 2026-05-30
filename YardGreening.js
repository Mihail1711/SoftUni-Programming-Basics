function YardGreening(Sqmetersthatwillbelandscaped){
    let landscaped = Sqmetersthatwillbelandscaped;
    let pricelandscaped = 7.61;
    let totalSum = landscaped * pricelandscaped;
    let discount = totalSum * 0.18;
    let finalysum = totalSum - discount;
    console.log(`The final price is: ${finalysum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
YardGreening(150)
