function receivesAFunction(functionReceived) {
    functionReceived();
}

function returnsANamedFunction() {
    return function namedFunction() { 
    console.log('Cool!')};
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('No way!');
    }
}



