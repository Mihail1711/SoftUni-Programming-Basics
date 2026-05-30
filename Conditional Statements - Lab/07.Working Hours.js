function WorkingHours(hours, day){
    if (hours >= 10 && hours <= 18 && day != 'Sunday'){
        console.log('open');
    } else {
        console.log('closed');
    }
}