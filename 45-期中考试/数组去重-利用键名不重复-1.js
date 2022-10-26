let songs = [
    { name: "羽根", artist: "air" },
    { name: "羽根", artist: "air" },
    { name: "晴天", artist: "周杰伦" },
    { name: "晴天", artist: "周杰伦" },
    { artist: "周杰伦", name: "晴天" }
];
function unique(arr) {
    let unique = {};
    arr.forEach(function (item) {
        unique[JSON.stringify(item)] = item;//键名不会重复
    })
    arr = Object.keys(unique).map(function (u) {
        //Object.keys()返回对象的所有键值组成的数组，map方法是一个遍历方法，返回遍历结果组成的数组.将unique对象的键名还原成对象数组
        return JSON.parse(u);
    })
    return arr;
}



console.log(unique(songs));