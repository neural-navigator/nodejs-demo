// const math = require('./math')

// const { add, subtract } = math;

// console.log(add(4,2));
// console.log(subtract(4,2));

// const data = require('./data.json')  // require('./data') also give the same result

// console.log(data)

// built in module demo

const { log } = require("node:console") // also works fine with require("console")
const path = require("node:path")

// log(__filename)
// log(__dirname)

// log(path.basename(__filename))
// log(path.basename(__dirname))

// log(path.extname(__filename))

// log(path.parse(__filename))

log(path.format(path.parse(__filename)))

log(path.join("a", "b", "c"))