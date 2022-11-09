// const manish =require("./second");
// console.log("hello world!", manish)
// const os =require("os");
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.version())
// console.log(os.release())
// console.log(os.type())

// const path=require('path');

// const a= path.basename('C:\\temp\\myfile.html'); 
// console.log(a);

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8',(err,data)=>{
//     console.log(err,data)
// })
// const a =fs.readFileSync('file.txt')
//      console.log(a)
//     console.log(a.toString())

// fs.writeFile('file2.txt',"This is data", ()=>{
//     console.log("Written to the file")
// }); 

// const a= fs.writeFileSync('file2.txt',"This is data2")
//     console.log(a)

// console.log("Finished reading file!")  


const url = require('node:url'); //CJS
// import url from 'node:url'; // ESM

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);