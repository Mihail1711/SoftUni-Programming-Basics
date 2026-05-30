function HotelRoom(month, night){
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;
    let totalStudioPrice = 0;
    let totalApartmentPrice = 0;

    switch (month){
        case "May":
        case "October":
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;
            break;
        case "June":
        case "September":
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
            break;
        case "July":
        case "August":
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
    }
    
    totalStudioPrice = studioPricePerNight * night;
    totalApartmentPrice = apartmentPricePerNight * night;

    if (month == 'May' || month == 'Octomber'){
        if (night > 14){
            studioPricePerNight *= 0.70;
        }
    } else if (month == 'June' || month == 'September'){
        if (night > 7 && night <= 14){
            studioPricePerNight *= 0.95;
        }
    } else if (month == 'July' && month == 'August'){
        if (night >= 14){
            studioPricePerNight *= 0.80;
        }
    }

    if (night > 14){
        apartmentPricePerNight *= 0.90;
    }

    console.log(`Apartment: ${apartmentPricePerNight.toFixed(2)} lv.`);
    console.log(`studioPricePerNight: ${studioPricePerNight.toFixed(2)} lv.`);
}