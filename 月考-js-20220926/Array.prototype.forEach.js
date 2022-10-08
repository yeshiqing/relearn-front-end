function inc(arr) {
    // arr.forEach((v, i) => arr[i]++)
    arr.forEach(function (v, i) {
        let x = arr[i]++
        console.log(x);
        return null  // 不需要 return 值
    })
}
let arr = [1, 2, 3]
inc(arr)
console.log(arr)