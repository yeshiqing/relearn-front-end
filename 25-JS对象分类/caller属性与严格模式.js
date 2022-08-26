function myFunc() {
    'use strict'
    if (myFunc.caller === null) {
        return 'The function was called from the top!';
    } else {
        return `This function's caller was ${myFunc.caller}`;
    }
}

// Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
myFunc()