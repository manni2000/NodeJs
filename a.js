// const simple = require('./b')

// simple();

console.log("A starting");
exports.done = false;
const b = require('./b.js');
console.log("in a, a.done = %j", b.done());
exports.done = true;
console.log(" a done");