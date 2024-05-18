//result and result2 variables defined
let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

// Multiplying result * result2 and reassigning the output back to variable result using assignment shorthand 
result *= result2;
console.log(result);

// Formatting result to 2 dp and assigning to variable called finalResult

let finalResult = result.toFixed(2);
console.log(finalResult);

//Checking datatype of final result
console.log(typeof finalResult);

// coverting finalNumber to Number
let finalNumber = finalResult*1;
console.log(finalNumber);


