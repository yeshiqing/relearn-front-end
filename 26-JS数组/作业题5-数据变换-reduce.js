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

let arr2 = arr.reduce((preValue, curValue, i, array) => {
    if (curValue.parent === null) {
        preValue.id = curValue.id
        preValue['名称'] = curValue['名称']
    } else {
        let pObjInPre = findParentIn(curValue, [preValue])
        if (pObjInPre) {
            pObjInPre.children = pObjInPre.children || []
            pObjInPre.children.push(curValue)
        } else {
            let pObjInOriginal = findParentIn(curValue, array)
            if (pObjInOriginal) {
                pObjInOriginal.children = pObjInOriginal.children || []
                pObjInOriginal.children.push(curValue)
            }
        }
    }
    delete curValue.parent
    return preValue
}, { id: null, 名称: null, children: null })
console.log(arr2)
console.log(arr)

function findParentIn(obj, array) {
    let pId = obj.parent
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === pId) {
            return array[i]
        }
    }
    return null
}