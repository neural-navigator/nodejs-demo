const fs = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./src/file.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./src/file4.txt.gz'))

const writeableStream = fs.createWriteStream("./src/file4.txt");

readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });




















// async function readFile() {
//     try {
//         const data = await fs.readFile('./src/file1.txt', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile();

// fs.readFile('./src/file1.txt', 'utf-8')
//     .then( (data)=> {console.log(data)})
//     .catch( (error) => {console.log(error)})

// const fileContents = fs.readFileSync('./src/file.txt', 'utf-8')

// console.log(fileContents);

// console.log("Before async method");

// fs.readFile('./src/file.txt', 'utf-8', (error, data) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// console.log("after async method");

// fs.writeFileSync('./src/file1.txt', "Hello world!")

// fs.writeFile('./src/file2.txt', 'Hello World!', {flag: "a"}, (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("file written!");
//     }
// })

// {flag: "a"} is used for append