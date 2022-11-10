// function simple(){
//     console.log("Simple is complex ");
// }

// module.exports=simple();

console.log("B starting");
exports.done = false;
const b =require("./a.js");
console.log("in b, a.done = %j", a.done());
exports.done = true;
console.log("b done");