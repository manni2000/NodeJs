const EventEmitter = require('events'); //CJS
// import { EventEmitter } from 'node:events'; //ER

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfall', () => {
  console.log('Please turn off motor!!');
  setTimeout(()=>{
    console.log("Please turn off the motors! its is genter remainder")
  }, 3000); 
});

console.log("The script is running!");
console.log("the scipts is still running!!");
myEmitter.emit('Waterfall');