let f = x => { x = x || 0; console.log('平方值为'); return x * x }
// let f = x => (console.log('平方值为'), x * x)
console.log(f.toString())
let square = f()
console.log(square)