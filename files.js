const fs = require('fs');

// Reading files
fs.readFile('./docs/blog1.txt', (err, data) => { //async function runs function once readFile is completed
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line'); // this will fire before the above console.log

// Writing files
fs.writeFile('./docs/blog1.txt', 'hello world', () => { // also async
    console.log('file was written')
});

// creates file if it doesn't exist

// Directories
fs.mkdir('./assets', ( err)=> {
    if (err) {
        console.log(err)
    }
    console.log('folder created');
}); // async also 