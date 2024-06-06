let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Removing the last item in the array
myArray.pop();

console.log(myArray);

// Adding two new names to the end of the array
myArray.push("Yaki", "Tomi");

console.log(myArray);

// Going over each item in the array and adding the index number after the name in parenthesis example: Ryu(o)
let i = 0;
for (i = 0; i < myArray.length ; i++) {
    const display = `${myArray[i]} (${i})` 

    console.log(display)
}

// Joining array items in a single string variable called myString with seperator "-"    
const myString = myArray.join("-");

console.log(myString);










  


