//Globals

console.log(__filename);
console.log(__dirname);
console.log(require);
console.log(process);
console.log(module)
setInterval(() => {
    console.log("Hello world");
    console.log(module);
},3000)