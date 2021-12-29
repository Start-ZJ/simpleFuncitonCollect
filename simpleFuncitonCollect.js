let moment = require('moment');
// 执行一些简单的延时操作
asyncSetTime = (funName, time) => {
    if (funName && typeof funName === "function") {
        setTimeout(() => { funName() }, time);
    }
}
// 效验输入的是否是数字
validateIsNumber = (number) => {
    let numPattern = /^-?\d*\.?\d+$/;
    return numPattern.test(number)
}
// 效验输入的是否是邮箱
validateIsEmail = (number) => {
    let numPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return numPattern.test(number)
}
// 效验输入的是否是手机号码
validateIsEmail = (number) => {
    let numPattern = /^1[34578]\d{9}$/;
    return numPattern.test(number)
}
//正则匹配链接里的参数 e=xxxx getQueryString(params)
getQueryString = (param) => {
    var t = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
    return null != i ? unescape(i[2]) : null;
}
//简单对象数组去重
objectSaveOnly = (ary, keyWord) => {
    if (typeof ary !== 'object') {
        console.error('请确认传入的是一个数组！');
        return;
    }
    if (ary.length === 0) {//数组的长度为0不需要去重
        return;
    }
    let newAry = [];
    ary.forEach((element0, index0) => {
        if (index0 === 0) { //第一个对象必定是唯一
            newAry.push(element0);
        } else {
            let callBcak = newAry.filter(item => { return item[keyWord] === element0[keyWord] });
            if (callBcak.length === 0) {//返回长度为0说明没有找到相同的
                newAry.push(element0);
            }
        }
    });
    return newAry;
}
//简单数组去重(非对象)
SimpleArraySaveOnly = (arr) => {
    return [...new Set(arr)];
}
// 防抖
AntiShakeFun = () => {

}
// 节流
// 获取当前月的长度
getMonthLength = (Year, Month) => {
    return parseInt(moment(`${Year}/${Month}`, 'YYYY/MM').endOf('month').format("DD"));
}
module.exports = {
    asyncSetTime,
    validateIsNumber,
    validateIsEmail,
    objectSaveOnly,
    SimpleArraySaveOnly,
    getQueryString,
    getMonthLength
}