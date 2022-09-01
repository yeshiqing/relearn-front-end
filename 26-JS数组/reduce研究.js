let arr = [1, 2, 3, 4]
let arr2 = arr.reduce((preValue, curValue, i, array) => {
    if (curValue !== 3) {
        preValue.push(curValue + 1)
    } else {
        arr[2] = 100
        console.log(arr)
    }
    return preValue
}, [])
// reduce 的真正的目标是基于最后一个参数 initialValue 产生的。
console.log(arr2)