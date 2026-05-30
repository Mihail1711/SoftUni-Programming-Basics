function skiTrip(days, roomType, assessment) {
    // Стъпка 1: Изчисляваме нощувките (винаги са с 1 по-малко от дните)
    let nights = days - 1;
    let pricePerNight = 0;

    // Стъпка 2: Определяме базовата цена за една нощувка
    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            break;
    }

    // Изчисляваме първоначалната обща сума
    let totalPrice = nights * pricePerNight;

    // Стъпка 3: Прилагаме отстъпката според дните за престой (days)
    if (roomType === "apartment") {
        if (days < 10) {
            totalPrice *= 0.70; // 30% отстъпка
        } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.65; // 35% отстъпка
        } else if (days > 15) {
            totalPrice *= 0.50; // 50% отстъпка
        }
    } else if (roomType === "president apartment") {
        if (days < 10) {
            totalPrice *= 0.90; // 10% отстъпка
        } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.85; // 15% отстъпка
        } else if (days > 15) {
            totalPrice *= 0.80; // 20% отстъпка
        }
    } // За "room for one person" няма нужда от else, защото няма отстъпки

    // Стъпка 4: Добавяне на бакшиш или намаление според оценката
    if (assessment === "positive") {
        totalPrice *= 1.25; // +25%
    } else if (assessment === "negative") {
        totalPrice *= 0.90; // -10%
    }

    // Стъпка 5: Отпечатваме крайния резултат, форматиран до 2 знака
    console.log(totalPrice.toFixed(2));
}