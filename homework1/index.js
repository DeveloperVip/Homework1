const operator = prompt('Enter operator ( + , - , * or / ): ');
const numberOne = parseInt(prompt('Number one: ')) ;
const numberTwo = parseInt(prompt('Number two: '));
let Total ;
switch(operator){
    case "+":
        Total = numberOne + numberTwo
        console.log(`${numberOne} ${operator} ${numberTwo} = ${Total}`);
        break;
    case "-":
        Total = numberOne - numberTwo
        console.log(`${numberOne} ${operator} ${numberTwo} = ${Total}`);
        break;
    case "*":
        Total = numberOne * numberTwo
        console.log(`${numberOne} ${operator} ${numberTwo} = ${Total}`);
        break;
    default:
        Total = numberOne / numberTwo
        console.log(`${numberOne} ${operator} ${numberTwo} = ${Total}`);
}