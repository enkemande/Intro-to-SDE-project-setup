let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

if (machineActive === true) {
    machineResult = 'Machine switched ON';
    console.log(machineResult);
// pwd === 'cheese' ? pwdResult = 'Password successful' : pwdResult ='Password Unsuccessful'; clean code correction below
pwdResult = pwd === 'cheese' ? 'Password successful' : 'Password Unsuccessful';
console.log(pwdResult)
} else {
    machineResult = 'Machine switched OFF';
    console.log(machineResult);
}


