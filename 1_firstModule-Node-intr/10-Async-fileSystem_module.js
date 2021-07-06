//File System Module : interaction with the file system

//Asynchronous file system methods 

const {readFile, writeFile} = require('fs');

readFile( './content/firstOne.txt', 'utf8' , (err, result) => {   //callback function:check error, then access results
    if (err){      //inside function: checking for an error
    console.log(err); //if error is found, log error
    return null //return null or return
    }
    console.log(result)
    const firstResults = result;
    readFile('./content/secondOne.txt','utf-8',(err, result) => {
        if(err){
            console.log(err);
            return
        }
        console.log(result)
        const secondResults = result;
        writeFile('./content/theSecondNewFile-Async.pdf',`This is a new file that I have created as a pdf, you can take this file as a template for my imaginary CV.\nAlsoI will add 100 times 14 with 14 times 7, and the result is: ${(100*14) + (14*7)}.`, (err, result)=>{
       if(err){
           console.error(err)
           return null
       }
       console.log(result)
   })
})
});