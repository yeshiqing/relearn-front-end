// 冒泡排序
let array = [2, 1, 5, 3, 8, 4, 9, 5]
let sort = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                let temp = arr[j + 1];        //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sort(array)); // [1,2,3,4,5,5,8,9]