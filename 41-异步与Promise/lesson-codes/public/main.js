let create = document.createElement.bind(document)

getJSON_by_encapsulated_ajax.onclick = () => {
    // then 的第一个参数是 success，第二个参数是 fail
    // success 和 fail 都只接受一个参数，分别是在执行 resolve 和 reject 方法时传入。
    ajax('GET', '51.json').then((response) => {
        console.log(response);
    }, (xhr) => {
        console.log(xhr);
    })
}

getJSON.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "/5.json")
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.response
            let obj = null
            try {
                obj = JSON.parse(res)
            } catch (error) {
                console.error("出错了，错误详情是")
                console.log(error);
                obj = { 'name': '' }
            }
            myName.textContent = `, my name is ${obj.name}`
        }
    }
    xhr.send()
}

getXML.onclick = () => {
    console.log("点击了'请求XML'")
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let doc = xhr.responseXML // 天生有 API 接受 XML
            console.log(doc);
            let text = doc.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
        }
    }
    xhr.open('GET', '4.xml')
    xhr.send()
}

getHTML.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/3.html')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.response
            let div = create('div')
            div.innerHTML = res
            document.body.appendChild(div)
        }
    }
    xhr.send()
}

getJS.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/2.js')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.response
            let script = create('script')
            script.innerHTML = res
            document.body.appendChild(script)
        }
    }
    xhr.send()
}

getCSS.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/style.css')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                let res = xhr.response
                let style = create('style')
                style.innerHTML = res
                document.head.appendChild(style)
            } else {
                console.info(`http状态码是：${xhr.status}`);
                alert('加载 CSS 失败')
            }
        }
    }
    xhr.send()
}