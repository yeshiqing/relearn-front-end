let a = (function () { /*
... line 1
... line 2
... line 3
... */}).toString()
let b = a.split('\n')
let c = b.slice(1, -1).join('\n')
console.log(c)