// This is the demo on immediately invoked function expression

// Before a module's code is executed, Node js will wrap it with a function wrapper that provides module scope


// demo

(function () {
    const superHero = "superMan";
    console.log(superHero);
})();

// iife with argument


(function (message) {
    const superHero = "superMan";
    console.log(message, superHero);
})("Hello,");


// module wrapper

(function(exports, require, module, __filename, __dirname){
    const superHero = "Bat Man"
    console.log(superHero);
})
