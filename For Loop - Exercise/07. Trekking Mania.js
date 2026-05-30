function trekkingmania(input){
    let groups = Number(input[0]);
    let totalpeople = 0;
    let musala = 0,
    monblan = 0,
    kilimindjaro = 0,
    k2 = 0,
    everest = 0;

    for (let i = 1; i <= groups; i++){
        const people = Number(input[i]);
        totalpeople += people;
        
        if (people <= 5) musala += people;
        else if (people <= 12) monblan += people;
        else if (people <= 25) kilimindjaro += people;
        else if (people <= 40) k2 += people;
        else  everest += people;



    }
    console.log(`${((musala / totalpeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / totalpeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimindjaro / totalpeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalpeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalpeople) * 100).toFixed(2)}%`);

}