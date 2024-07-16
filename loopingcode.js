// looping through an array with for...of loop
const cats = ["leopard", "serval", "Jaguar", "Tiger", "caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

// Using map to loop through an array and converting to uppercase
function toUpper(cats) {
    return cats.toUpperCase();
}

const cats1 = ["leopard", "serval", "Jaguar", "Tiger", "caracal", "Lion"];

const upperCats = cats1.map(toUpper);

console.log(upperCats);

// Using filter to select particular array items
function lcats(star) {
    return star.startsWith("l");
}

const cats2 = ["leopard", "serval", "Jaguar", "Tiger", "caracal", "lion"];

const filtered = cats2.filter(lcats);
console.log(filtered);






