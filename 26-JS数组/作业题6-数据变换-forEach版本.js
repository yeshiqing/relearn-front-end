// 测试用例 1
let arr = [{ 名称: '动物', id: 1, parent: null },
{ 名称: '柴犬', id: 4, parent: 2 },
{ 名称: '狗', id: 2, parent: 1 },
{ 名称: '猫', id: 3, parent: 1 },
{ 名称: '拉布拉多', id: 5, parent: 2 },
{ 名称: '金毛', id: 6, parent: 2 }
];

// 要求：数组变成对象
// let targetData = 
//     {
//         id: 1, 名称: '动物', children: [
//             {
//                 id: 2, 名称: '狗', children: [{
//                     id: 4, 名称: '柴犬', children: null
//                 }, {
//                     id: 5, 名称: '拉布拉多', children: null
//                 }, {
//                     id: 6, 名称: '金毛', children: null
//                 }]
//             },
//             { id: 3, 名称: '猫', children: null },
//         ]
//     }
let target = null
arr.forEach((item, index, arr) => {
    if (item.parent === null) {
        target = item
        delete target.parent
    } else {
        item.children = item.children || null
        let pObj = findParent(item, arr)
        if (pObj) {
            pObj.children = pObj.children || []
            pObj.children.push(item)
        }
    }
    delete item.parent
})
console.log(target)
console.log(JSON.stringify(target))
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