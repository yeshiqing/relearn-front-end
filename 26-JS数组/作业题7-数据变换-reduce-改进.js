// 测试用例 1
// let arr = [{ name: '动物', id: 1, parent: null },
// { name: '柴犬', id: 4, parent: 2 },
// { name: '狗', id: 2, parent: 1 },
// { name: '猫', id: 3, parent: 1 },
// { name: '拉布拉多', id: 5, parent: 2 },
// { name: '金毛', id: 6, parent: 2 }
// ];

// 测试用例 2
let arr = [{ name: '动物', id: 1, parent: 7 },
{ name: '柴犬', id: 4, parent: 2 },
{ name: '狗', id: 2, parent: 1 },
{ name: '猫', id: 3, parent: 1 },
{ name: '拉布拉多', id: 5, parent: 2 },
{ name: '金毛', id: 6, parent: 2 },
{ name: '生物', id: 7, parent: null },
{ name: '植物', id: 8, parent: 7 }
];
// 要求：数组变成对象
// let targetData = 
//     {
//         id: 1, name: '动物', children: [
//             {
//                 id: 2, name: '狗', children: [{
//                     id: 4, name: '柴犬', children: null
//                 }, {
//                     id: 5, name: '拉布拉多', children: null
//                 }, {
//                     id: 6, name: '金毛', children: null
//                 }]
//             },
//             { id: 3, name: '猫', children: null },
//         ]
//     }

let arr2 = arr.reduce((preValue, curValue, i, array) => {
    if (curValue.parent === null) {
        preValue = curValue
        delete preValue.parent
    } else {
        curValue.children = curValue.children || null
        let pObj = findParent(curValue, array)
        if (pObj) {
            pObj.children = pObj.children || []
            pObj.children.push(curValue)
        }
    }
    delete curValue.parent
    return preValue
}, null)
console.log(arr2)
console.log(JSON.stringify(arr2)) // 更容易看清楚数据
console.log(arr)

function findParent(obj, array) {
    let pId = obj.parent
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === pId) {
            return array[i]
        }
    }
    return null
}


