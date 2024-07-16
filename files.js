const fs = require('fs');

// Reading files
fs.readFile('./docs/blog1.txt', (err, data) => { //async function runs function once readFile is completed
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// Writing files
fs.writeFile('./docs/blog1.txt', 'hello world', () => { // also async
    console.log('file was written')
});

// creates file if it doesn't exist

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', ( err)=> { // async also 
        if (err) {
            console.log(err)
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}