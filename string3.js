const quote = 'I dO nOT lIke gREen eGgS anD HAM';

//changing all to lowercase except for first capital letter
let fixedQuote = quote.slice(0,1) + quote.slice(1).toLowerCase();

console.log(fixedQuote);


// Replacing "green eggs and ham" in fixedQuote
fixedQuote = fixedQuote.replace("green eggs and ham", "Koki corn");

console.log(fixedQuote);

// Adding period to final quote
const finalQuote = `${fixedQuote}.`;

console.log(finalQuote); 



