// minMax.js

// Funktion, um den kleineren Wert von a und b zu finden
function min(a, b) {
     return a <= b ? a : b;
}

// Funktion, um den größeren Wert von a und b zu finden
function max(a, b) {
    return a >= b ? a : b;
}

module.exports.min =min
module.exports.max =max