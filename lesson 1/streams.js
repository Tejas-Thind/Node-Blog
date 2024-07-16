// Start using data,  before it has finished loading

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }); 
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => { // this is an event listener, listening to a data event, everytime we recieve a buffer in a stream
    console.log('------NEW CHUNK------');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream); // same thing as above but shorter