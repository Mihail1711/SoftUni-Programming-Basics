function tennisranklist(input){
    const tournaments = Number(input[0]);
    const pointsFromStart = Number (input[1]);
    let points = 0;
    let winscount = 0;

    for (let i = 2; i < input.length; i++) {
        const result = input[i];

        if (result === "W") points += 2000, winscount++;
        else if (result === "F") points += 1200;
        else if (result === "SF") points += 720;
    }

    console.log(`Final points: ${points + pointsFromStart}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${(winscount / tournaments * 100).toFixed(2)}%`);
}
