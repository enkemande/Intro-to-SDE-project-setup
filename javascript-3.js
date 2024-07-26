//Accessing every item of an array using the (for...of) method

const favCars = ["Maseratti", "Bentley", "Range-rover", "Mercedes-Benz", "Lamborghini Urus"]

for (const cars of favCars) {
    console.log(cars)
}

// Accessing every item of an array using a (for loop)...

for (let i = 0; i < favCars.length; i++) {
    console.log(`${favCars[i]} - ${i}`)
}

// Accessing every item of an array using (map) method
function niceCars(topCars) {
    console.log(topCars);
}

const myFavCarList = favCars.map(niceCars)

console.log(myFavCarList)

// Accessing particular items of an array using (filter) method

function favouriteCars(sCars) {
    return sCars.startsWith("M");
}

const finalCarList = favCars.filter(favouriteCars)

console.log(finalCarList);