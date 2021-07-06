//File System Module : interaction with the file system


//Synchronous file system methods

const {readFileSync, writeFileSync} = require('fs');
console.log('start');  //will be ogged before writing the files
//reading from file system
const readFirst = readFileSync('./content/firstOne.txt','utf-8');
const readSecond = readFileSync('./content/secondOne.txt','utf-8');
console.log(readFirst, readSecond);

//creating new file
 
const myNewFile = writeFileSync('./content/thenewfile.docx',`10 plus 20 equals :${10+20}.\nHere is the result of the new file created: ${readFirst}, ${readSecond}.\n`);

console.log('I\'m done with this task');
console.log('...starting the next one');