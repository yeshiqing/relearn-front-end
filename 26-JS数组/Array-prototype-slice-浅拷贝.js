let d = {
    bar: "buz"
}
let a = {
    foo: d
}
let b = [a]
let c = b.slice()

console.log(c)
