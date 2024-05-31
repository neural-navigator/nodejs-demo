console.log("process 1");
process.nextTick( () => console.log("process.nextTick 1"));
console.log("process 2");

