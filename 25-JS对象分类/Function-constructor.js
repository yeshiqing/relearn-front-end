// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
// Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as eval().
// However, unlike eval (which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

new Function(functionBody)
new Function(arg0, arg1, /* … ,*/ argN, functionBody)

// Function() can be called with or without new. Both create a new Function instance.
Function(functionBody)
Function(arg0, arg1, /* … ,*/ argN, functionBody)
