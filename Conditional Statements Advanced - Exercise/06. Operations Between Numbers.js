function OperationBetweenNumbers(n1, n2, operator){
    let result;

    if ((operator === "/" || operator === "%") && n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
        return;
    }

    switch (operator){
        case "+":
            result = n1 + n2;
            console.log(`${n1} ${operator} ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "-":
            result = n1 - n2;
            console.log(`${n1} ${operator} ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "*":
            result = n1 * n2;
            console.log(`${n1} ${operator} ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "/": // Fixed case
            result = n1 / n2;
            console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            break;
        case "%": // Fixed case
            result = n1 % n2;
            console.log(`${n1} ${operator} ${n2} = ${result}`);
            break;
    }
}