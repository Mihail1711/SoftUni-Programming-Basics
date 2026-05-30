function Oscars(input){
    const actorName = input[0];
    let academyPoints = Number(input[1]);
    const evaluatorsCount = Number(input[2]);

    let index = 3;

    for (let i = 0; i < evaluatorsCount; i++){
        // Махнахме "s" от края на имената тук:
        const evaluatorName = input[index];
        const evaluatorPoints = Number(input[index + 1]);

        index += 2;

        const pointsWon = (evaluatorName.length * evaluatorPoints) / 2;
        academyPoints += pointsWon;
        
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return; 
        }
    }

    const pointsNeeded = 1250.5 - academyPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}
