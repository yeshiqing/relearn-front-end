let songs = [
    { name: "羽根", artist: "air" },
    { name: "羽根", artist: "air" },
    { name: "晴天", artist: "周杰伦" },
    { name: "晴天", artist: "周杰伦" },
    { artist: "周杰伦", name: "晴天" }
];
function unique(arr) {
    let result = {};
    let finalResult = [];

    arr.forEach((item, i) => {
        result[item.name] = item
    })
    Object.keys(result).forEach((key) => {
        finalResult.push(result[key])
    })

    return finalResult;
}

// [{name:"羽根",artist:"air"},{name:"晴天",artist:"周杰伦"}]
console.log(unique(songs));