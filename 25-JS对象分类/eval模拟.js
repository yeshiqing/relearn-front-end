https://github.com/mqyqingfeng/Blog/issues/183
const params = {
    name: 'jiangzhiguo',
    email: 'jiangzhiguo2010@qq.com',
    address: {
        city: 'beijing',
        street: 'xxxx',
    }
}
const keypath = ['params', 'address', 'number']
const value = 1000
// params.address.number = 1000
const newParams = safeEval('params', { params }, `${keypath.join('.')}=${value}`);
console.log(newParams.address.number)
console.log(newParams.address.number === value) // true