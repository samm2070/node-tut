const os=require('os')



// console.log(`uptime is ${os.uptime()}`)

const osInfo={
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMemory: os.freemem(),
}


console.log(osInfo)