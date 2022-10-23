const moment = require('moment');

/** @description 执行一些简单的延时操作 */
asyncSetTime = (funName, time) => {
    if (funName && typeof funName === "function") {
        setTimeout(() => { funName() }, time);
    }
}
/** @description 效验输入的是否是数字 */
validateIsNumber = (number) => {
    const numPattern = /^-?\d*\.?\d+$/;
    return numPattern.test(number)
}
/** @description 效验输入的是否是邮箱 */
validateIsEmail = (number) => {
    const numPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return numPattern.test(number)
}
/** @description 效验输入的是否是手机号码 */
validateIsEmail = (number) => {
    const numPattern = /^1[34578]\d{9}$/;
    return numPattern.test(number)
}
/** @description 正则匹配链接里的参数 e=xxxx getQueryString(params) */
getQueryString = (param) => {
    const t = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
    return null != i ? unescape(i[2]) : null;
}
/** @description 简单对象数组去重 */
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
/** @description 简单数组去重(非对象) */
SimpleArraySaveOnly = (arr) => {
    return [...new Set(arr)];
}
// 防抖
AntiShakeFun = () => {

}
// 节流

/** @description 获取当前月的长度 */
getMonthLength = (Year, Month) => {
    return parseInt(moment(`${Year}/${Month}`, 'YYYY/MM').endOf('month').format("DD"));
}
/** @description 计算指定日期(YYYY-MM-DD)到当前时间距离的天数 */
getDistanceDays = (date1) => {
    let date1_timeStamp = new Date(date1) - 0;
    let date2 = getNowFormatDate();//获取YYYY-MM-DD的当前时间
    let date2_timeStamp = new Date(date2) - 0;
    let max = '', min = '';
    if (date1_timeStamp > date2_timeStamp) {
        max = date1_timeStamp
        min = date2_timeStamp
    } else {
        max = date2_timeStamp
        min = date1_timeStamp
    }
    return (max - min) / (24 * 60 * 60 * 1000)
}
/** @description 获取当前日期函数 */
const getNowFormatDate = () => {
    let date = new Date(),
        seperator1 = '-', //格式分隔符
        year = date.getFullYear(), //获取完整的年份(4位)
        month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate = date.getDate() // 获取当前日(1-31)
    if (month >= 1 && month <= 9) month = '0' + month // 如果月份是个位数，在前面补0
    if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0
    let currentdate = year + seperator1 + month + seperator1 + strDate
    return currentdate
}
module.exports = {
    asyncSetTime,
    validateIsNumber,
    validateIsEmail,
    objectSaveOnly,
    SimpleArraySaveOnly,
    getQueryString,
    getMonthLength,
    getDistanceDays
}