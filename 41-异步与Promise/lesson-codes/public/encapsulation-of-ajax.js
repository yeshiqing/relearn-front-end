// use Promise to encapsulate AJAX 
let ajax = (method, url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    // resolve 代码内部会调用 then 的 success 方法，并把接收的第一个参数传给 success
                    resolve.call(null, xhr.response)
                } else if (xhr.status >= 400) {
                    // 同理，reject 代码内部会调用 then 的 fail 方法，并把接收的第一个参数传给 fail
                    reject.call(null, xhr)
                }
            }
        }
        xhr.send()
    })
}

// 使用示例
// {
//     let success = (response) => {
//         console.log(response);
//     }
//     let fail = (xhr) => {
//         console.log(xhr);
//     }
//     ajax('GET', '5.json').then(success, fail)
// }