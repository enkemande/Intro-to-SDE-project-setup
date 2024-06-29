let response;
let score = 75;
let machineActive = true;

if (machineActive === true) {
    response = 'Machine switched on';
    console.log(response);
if (score < 0 || score > 100) {
    response = 'This is not possible, an error has occurred.';
    console.log(response);
} else if (0 <= score <= 19 ) {
    response = 'That was a terrible score — total fail!';
    console.log(response);
} else if (20 <= score <= 39) {
    response = 'You know some things, but it\'s a pretty bad score. Needs improvement.';
    console.log(response);
} else if (40 <= score <= 69) {
    response = 'You did a passable job, not bad!';
    console.log(response);
} else if (70 <= score <= 89) {
    response = 'That\'s a great score, you really know your stuff.';
    console.log(response);
} else if (90 <= score <= 100) {
    response = 'What an amazing score! Did you cheat? Are you for real?"';
    console.log(response);
} else {
    response = 'Machine switched off, turn on machine';
    console.log(response);
}
}



