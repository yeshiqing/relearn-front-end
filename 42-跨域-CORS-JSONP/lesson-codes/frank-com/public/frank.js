function ajax(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr);
                }
            }
        };
        xhr.send();
    });
}

// 方案一：CORS 实现跨域
// ajax("get", "http://qq.com:8888/friends.json").then(response => {
//     console.log("这是 AJAX");
//     console.log(response);
// }, () => {
//     console.log('there is an error');
// });

// 方案二：JSONP 实现跨域，后端返回一个全局变量
function jsonp_globalVariable(url) {
    return new Promise((resolve, reject) => {
        let random = 'jeffreyJSONPCallbackName' + Math.random()
        let script = document.createElement('script')
        script.src = `${url}?globalVariable=${random}`
        script.onload = () => {
            resolve(window[random]) // script 发出请求后，后端传过来一个赋值的全局变量，并作为数据传给 success
            script.remove()
        }
        script.onerror = () => {
            console.log('script onerror');
            reject()
        }
        document.body.appendChild(script)
    })
}

// jsonp_globalVariable('http://qq.com:8888/friends-globalVariable1.js').then((data) => {
//     console.log(data)
// }, () => {
//     console.log('There is an error');
// })

function jsonp(url, cb) {
    let random = 'jeffreyJSONPCallbackName' + Math.random()
    window[random] = data => {
        cb(data)
    }
    let script = document.createElement('script')
    script.src = `${url}?callback=${random}`
    script.onload = () => {
        script.remove()
    }
    script.onerror = () => {
        console.log('script onerror');
    }
    document.body.appendChild(script)
}
// jsonp('http://qq.com:8888/friends.js', (data) => {
//     console.log(data)
// })

// 方案二：JSONP 实现跨域，后端返回的 JS 中执行 window[random] 回调函数
function jsonp_withPromise(url) {
    return new Promise((resolve, reject) => {
        let random = 'jeffreyJSONPCallbackName' + Math.random()
        window[random] = data => {
            resolve(data)
        }
        let script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}
// jsonp_withPromise('http://qq.com:8888/friends.js').then((data) => {
//     console.log(data)
// }, () => {
//     console.log('There is an error');
// })

// 后端传递 XML 字符串
// jsonp_withPromise('http://qq.com:8888/warning.js').then((data_xmlString) => {
//     let data = new DOMParser().parseFromString(data_xmlString, "text/xml");
//     console.log(data.querySelector('warning'));
//     console.log(data)
// }, () => {
//     console.log('There is an error');
// })