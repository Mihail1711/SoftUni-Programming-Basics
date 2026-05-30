function journey(budget, season){
    let destination = "";
    let place = "";
    let spent = 0;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season === "summer"){
            place = "Camp";
            spent = budget * 0.3;
        } else if (season === "winter"){
            place = "Hotel";
            spent = budget * 0.7;
        }
    } else if (budget <= 1000){
        destination = "Balkans"

        if (season === "summer"){
            place = "Camp";
            spent = budget * 0.4;
        } else if (season === "winter"){
            place = "Hotel";
            spent = budget * 0.8;
        }
    } else if (budget > 1000){
        destination = "Europe";
        place = "Hotel";
        spent = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${(spent).toFixed(2)}`)
}