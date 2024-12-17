// Using an arrow function to filter an Array list

const favCars = ["Maseratti", "Bentley", "Range-rover", "Mercedes-Benz", "Lamborghini Urus"]

const filter = favCars.filter((favCar) => favCar.startsWith("M"));

console.log(filter)

// Using an arrow function to map through an Array 
const favCars1 = ["Maseratti", "Bentley", "Range-rover", "BMercedes-Benz", "Lamborghini Urus"]

const carMap = favCars1.filter((favCar) => favCar.startsWith("B"));

console.log(carMap)