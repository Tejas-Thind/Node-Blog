// Global object with methods and properties

//console.log(global)

setTimeout(() => { // using method availible on global object
    console.log('In the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);