let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

//Converting the string into an array, removing the + characters and storing in a variable called myArray
const myArray = myString.split('+');

console.log(myArray);

// Storing the length of the array in a variable called arrayLength
const arrayLength = myArray.length;

console.log(arrayLength);

// storing the last item in the array in a variable called "lastItem"
const lastItem = myArray[arrayLength - 1];

console.log(lastItem);