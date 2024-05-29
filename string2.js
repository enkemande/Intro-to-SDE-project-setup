const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

//Retrieving the length of the quote variable and assigning to quoteLength
const quoteLength = quote.length;
const index = quote.indexOf(`${substring}`);

console.log(index);

//Trimming down the original quote to 'I do not like green eggs and ham.'
const revisedQuote = quote.slice(0,33);

console.log(revisedQuote);





