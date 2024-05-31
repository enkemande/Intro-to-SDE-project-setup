const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

let myString = 'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

// Changing mystring to a template literal
myString = `Using ${theorem}, we can work out that if the two 
shortest sides of a right-angled triangle have lengths of ${a} and ${b}, 
the length of the hypotenuse is (${Math.sqrt(a**(2) + b**(2))}).;`

console.log(myString); 



