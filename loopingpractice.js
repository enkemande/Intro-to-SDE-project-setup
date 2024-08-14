const favCars = ["Maseratti", "Range Rover Sport", "Mercedes Benz", "Toyota", "Volswagen", "TBentley"]

// Using for..of
for (const cars of favCars) {
    console.log(cars);
}

// Using map method

function pCars(bestCar) {
    return bestCar.startsWith("T");
}

const dCars = favCars.filter(pCars);
console.log(dCars);

// Using the arrow function

const mCars = favCars.filter(cars => cars.startsWith("T"));
console.log(mCars);

// Getting the last number from a large number value using mod(%)

const num = 13562102
const lastNum = num % 10;

console.log(lastNum);

// Using for...loop to loop through all elements of favCars

for (let i = 0; i < favCars.length; i++) {
    console.log(`${favCars[i]} ${i}`);
}

// Using the while loop / do while loop

const favPets = ["Cats", "Dogs", "Parrot"]

let myFavPets = "My favourite pets are ";
let i = 0;

while (i < favPets.length) {
    if (i === favPets.length - 1) {
        myFavPets += `and ${favPets[i]}.`;
    } else {
      myFavPets += `${favPets[i]},`;  
    }
    i++;
}
console.log(myFavPets)




