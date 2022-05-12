const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

getNumber();

let sum = 0;
function getNumber() {
    readline.question('Write a number: ', num => {
        if(num !== 'stop') {
            sum += parseInt(num);
            getNumber();
        }
        else {
            console.log('Sum of all numbers: ' + sum);
            readline.close();
        }
    });
}