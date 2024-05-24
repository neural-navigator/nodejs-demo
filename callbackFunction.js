function callbackFunction(name){
    console.log(`Hey ${name}`);
}


function higherOrderFunction(callback) {
    const name = 'John Doe';
    callback(name)
}


higherOrderFunction(callbackFunction);