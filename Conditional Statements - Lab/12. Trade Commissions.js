function TradeCommissions(city, sales) {
    let commission = -1; // Започваме от -1. Ако остане -1, значи има грешка.

    if (city == 'Sofia') {
        
        // 1. Кош: между 0 и 500 включително
        if (sales >= 0 && sales <= 500) {
            commission = 0.05; // 5%
        } 
        // 2. Кош: над 500 до 1000 включително
        else if (sales > 500 && sales <= 1000) {
            commission = 0.07;
        } 
        // 3. Кош: над 1000 до 10000 включително
        else if (sales > 1000 && sales <= 10000) {
            commission = 0.08; 
        } 
        // 4. Кош: над 10000
        else if (sales > 10000) {
            commission = 0.12;
        }

    } else if (city == 'Varna') {
         if (sales >= 0 && sales <= 500) {
            commission = 0.045; // 5%
        } 
        // 2. Кош: над 500 до 1000 включително
        else if (sales > 500 && sales <= 1000) {
            commission = 0.075;
        } 
        // 3. Кош: над 1000 до 10000 включително
        else if (sales > 1000 && sales <= 10000) {
            commission = 0.10; 
        } 
        // 4. Кош: над 10000
        else if (sales > 10000) {
            commission = 0.13;
        }

        
    } else if (city == 'Plovdiv') {
         if (sales >= 0 && sales <= 500) {
            commission = 0.055; // 5%
        } 
        // 2. Кош: над 500 до 1000 включително
        else if (sales > 500 && sales <= 1000) {
            commission = 0.08;
        } 
        // 3. Кош: над 1000 до 10000 включително
        else if (sales > 1000 && sales <= 10000) {
            commission = 0.12; 
        } 
        // 4. Кош: над 10000
        else if (sales > 10000) {
            commission = 0.145;
        }

    }

    // НАКРАЯ: Изчисление
    if (commission == -1) {
        console.log("error");
    } else {
        let total = sales * commission;
        console.log(total.toFixed(2));
    }
}
TradeCommissions('Sofia',1500)