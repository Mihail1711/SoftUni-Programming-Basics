function OnTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    // Стъпка 1: Превръщаме всичко в минути от началото на деня
    let examTimeInMinutes = (examHour * 60) + examMinute;
    let arrivalTimeInMinutes = (arrivalHour * 60) + arrivalMinute;

    // Стъпка 2: Намираме разликата
    let difference = arrivalTimeInMinutes - examTimeInMinutes;

    // Стъпка 3: Определяме главния статус (Late, On time, Early)
    if (difference > 0) {
        console.log("Late");
    } else if (difference >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    // Стъпка 4: Изчисляваме часовете и минутите за детайлното съобщение
    if (difference !== 0) {
        let absDifference = Math.abs(difference);
        let hours = Math.floor(absDifference / 60);
        let minutes = absDifference % 60;

        // Форматираме минутите да бъдат винаги с 2 цифри, ако има часове
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        // Стъпка 5: Проверки за отпечатване според това дали сме закъснели или подранили
        if (difference > 0) {
            // Случай: Закъснение
            if (hours > 0) {
                console.log(`${hours}:${formattedMinutes} hours after the start`);
            } else {
                console.log(`${minutes} minutes after the start`);
            }
        } else {
            // Случай: Подраняване
            if (hours > 0) {
                console.log(`${hours}:${formattedMinutes} hours before the start`);
            } else {
                console.log(`${minutes} minutes before the start`);
            }
        }
    }
}