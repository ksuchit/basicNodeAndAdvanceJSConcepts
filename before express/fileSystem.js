const fs = require('fs')

//three parameters 1.file name 2.message 3.callback function 
// fs.writeFile('message.txt', "Hello there node", (err) => {
//     if (err) throw err   //if there is error then it will throw error
    
//     console.log("file has been written")
// })

// console.log('hello')

fs.readFile('./message.txt', 'suchit', (err, data) => {
    if (err) throw err;
    console.log(data)
})
