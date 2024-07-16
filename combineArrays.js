// combining two arrays using The spread or concart method
const numbers = [1, 2, 3];
const pair = [4, 5, 6];

console.log(numbers + pair);

// Using the spread method
const newArray = [...numbers, ...pair];

console.log(newArray);

// Using the concart method
const newArray1 = numbers.concat(pair);

console.log(newArray1);

