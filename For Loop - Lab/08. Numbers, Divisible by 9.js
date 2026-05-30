function NumbersDivisibleby(startnum, endnum){
    let sum = 0;

    for (let n = startnum; n <= endnum; n++){
        if (n % 9 == 0){
            sum += n;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let n = startnum; n <= endnum; n++){
        if (n % 9 == 0){
            console.log(n);
        }
    }
}