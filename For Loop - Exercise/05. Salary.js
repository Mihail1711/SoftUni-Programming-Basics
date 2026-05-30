function salary(input) {
   
    const tabsCount = Number(input[0]);
    let currentSalary = Number(input[1]);

    
    for (let i = 2; i < tabsCount + 2; i++) {
        const website = input[i];
        if (website === "Facebook") {
            currentSalary -= 150;
        } else if (website === "Instagram") {
            currentSalary -= 100;
        } else if (website === "Reddit") {
            currentSalary -= 50;
        }
    }

        if (currentSalary <= 0) {
            console.log("You have lost your salary.");
            return; // Спираме функцията веднага и не продължаваме напред
        }
     console.log(currentSalary);
}

    console.log(currentSalary);
