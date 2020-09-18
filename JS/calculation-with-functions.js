

function zero(fn) {
    let n = 0;
   return fn? fn(n) : n;
}


function one(fn) {
    let n = 1;
   return fn? fn(n) : n;
}
function two(fn) {
    let n = 2;
   return fn? fn(n) : n;
}


function three(fn) {
    let n = 3;
   return fn? fn(n) : n;
}


function four(fn) {
    let n = 4;
    return fn? fn(n) : n;
}

function five(fn) {
    let n = 5;
    return fn? fn(n) : n;
}

function six(fn) {
    let n = 6;
    return fn? fn(n) : n;
}


function seven(fn) {
    let n = 7;
    return fn? fn(n) : n;
}

function eight(fn) {
    let n = 8;
    return fn? fn(n) : n;
}


function nine(fn) {
    let n = 9;
    return fn? fn(n) : n;
}

function plus(a) {
    return function(b) {
        return parseInt(b+a);
    };
}

function minus(a) {
    return function(b) {
        return parseInt(b-a);
    };
}

function times(a) {
    return function(b) {
        return parseInt(a*b);
    };
}

function dividedBy(a) {
    return function(b) {
        return parseInt(b/a);
    };
}



console.log(four(plus(nine())));