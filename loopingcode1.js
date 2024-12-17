// Using arrow function to iterate over an Array list & sorting specific elements
const favCars = ["Maseratti", "Bentley", "Range-rover", "BMercedes-Benz", "Lamborghini Urus"]

const carSpec = favCars.filter((car) => car.startsWith("B"))

console.log(carSpec)

// iterate over an Array of numbers
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < 9; i++) {
    console.log(myNum[i]);
}

// Linking two array list with (concat) method
const num = [1,2,4,,7]
const num1 = [3,5,8,9]

const combinedNum = [num.concat.num1]

console.log(combinedNum)

// Using the spread operator to link list of arrays
const numA = [1,2,4,,7]
const numB= [3,5,8,9]

const combine = [...numA, ...numB]



