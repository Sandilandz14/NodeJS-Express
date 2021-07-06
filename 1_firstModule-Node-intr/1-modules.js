//CommonJS: every file is a module by default
//Modules: encapsulated code (only share minimum) 

const names = require('./3-firstModule') //specify where exported module is being imported from
const greet = require('./4-secondModule') //import modules from 

console.log(names);


const myExports = require('./5-thirdOnModule') //importing module

console.log(myExports.realMan.hobbies[0], myExports.myItems[0])

// const myCalc =
 require('./6-moreOnNodemodules') //import module in path

greet('Luthando');
greet('Sandile');
greet('Yasharel');
greet(names.zizi);
greet(names.fene);




console.log(module);