function f1() { console.log(this); }
f1.call(null) // `this` point to window
f2.call(undefined) // `this` point to window

// let f2 = () => { console.log(this) }
// f2()
// f2.call(null)