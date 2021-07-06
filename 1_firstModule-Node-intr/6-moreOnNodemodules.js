const num1 = parseInt(5);
const num2 = parseInt(6);

function addValues(){
    console.log(`the sum of the values is ${num1+num2}`);
};

addValues();
console.log(`eight plus ten less fifty plus a hundred is:${8+10-50+100}.`);

module.exports.myCalc = addValues;
console.log(module);