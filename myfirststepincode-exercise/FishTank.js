function FishTank(length, width, height, percent){
    const volumeaquarium = length * width * height;
    const totalliters = volumeaquarium / 1000;
    const neededLiters = totalliters * (1 - (percent / 100));

    console.log(neededLiters.toFixed(4));
}
FishTank(85,75,47,17)

