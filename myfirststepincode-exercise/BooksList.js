function BooksList(pagesCurrentBook, pagesReadForHour, dayToBeDone){
    const timeforonebook = pagesCurrentBook / pagesReadForHour;
    const hoursperday = timeforonebook / dayToBeDone;
    
    console.log(hoursperday)

}