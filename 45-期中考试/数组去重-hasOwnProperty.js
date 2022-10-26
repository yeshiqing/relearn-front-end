let arr = [{ value: 'value', key: 'key' }, { key: 'key', value: 'value' }, { key: 'key', value: 'value' }, 1, 1, '1', '1', 'true', 'true', true, true, false, false, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
function unique(arr) {
    var obj = {};
    return arr.filter(function (item) {
        if (obj.hasOwnProperty(typeof item + JSON.stringify(item))) {
            return false;
        } else {
            return obj[typeof item + JSON.stringify(item)] = true
        }
    })
}
console.log(unique(arr))