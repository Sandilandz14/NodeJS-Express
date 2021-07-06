//Path Built-In Module

const thePath = require('path');


//separator property, returns platform-specific separator
console.log(thePath.sep);


//join method
const filePath = thePath.join('/content','subfolder','test.txt');
console.log(filePath);


//basename method: access last portion of path
const theBase = thePath.basename(filePath);
console.log(theBase); //logs base basename => last portion of path


//resolve method: returns absolute path to
//accepts a sequence of path OR path segments separated and resolves it into an absolute path
const absolutePath = thePath.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutePath);  //logs absolute path 
