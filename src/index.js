const { error } = require('node:console');
const fs = require('node:fs')

const fileContents = fs.readFileSync('./src/file.txt', 'utf-8')

console.log(fileContents);

console.log("Before async method");

fs.readFile('./src/file.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log("after async method");

fs.writeFileSync('./src/file1.txt', "Hello world!")

fs.writeFile('./src/file2.txt', 'Hello World!', {flag: "a"}, (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log("file written!");
    }
})

// {flag: "a"} is used for append