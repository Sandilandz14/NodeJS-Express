//OS Module : Node Built-in Module
const os = require('os') //os is a build-in module, no path required

//Methods for PS Module
//info about current user
const user = os.userInfo();
console.log(user);             

//method returns system uptime (how long a computer has been running in seconds)

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS);