const superHero = require('./moduleCaching')

console.log(superHero.getName());

superHero.setName("SuperMan")
console.log(superHero.getName());


const superHero2 = require('./moduleCaching')

console.log(superHero2.getName());