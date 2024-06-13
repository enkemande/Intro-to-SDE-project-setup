const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

1 // Finding the index of the Eagles item and hence using to remove the Eagles item
const index = birds.indexOf("Eagles");

console.log(index);

1 // Removing Eagles item using splice() method
if (index !== -1) {
    birds.splice(index, 1);
}

console.log(birds);

// making a new array called eBirds starting with letter "E"
function newBird(bird) {
    return bird.startsWith("E");
}

const eBirds = birds.filter(newBird);

console.log(eBirds);













