const moment = require('moment');
declare global {
    interface Window {
        [key: string]: any
    }
}
/** @description 执行一些简单的延时操作 */
const asyncSetTime = (funName: Function, time: number): void => {
    setTimeout(() => { funName && typeof funName === "function" ? funName() : null }, time);
}
/** @description 效验输入的是否是数字 */
const validateIsNumber = (number: number | string): Boolean => {
    number = number.toString();
    const numPattern = /^-?\d*\.?\d+$/;
    return numPattern.test(number)
}
/** @description 效验输入的是否是邮箱 */
const validateIsEmail = (number: number | string): Boolean => {
    number = number.toString();
    const numPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return numPattern.test(number)
}
/** @description 效验输入的是否是手机号码 */
const validateIsPhone = (number: number | string): Boolean => {
    number = number.toString();
    const numPattern = /^1[34578]\d{9}$/;
    return numPattern.test(number)
}
/** @description 正则匹配链接里的参数 e=xxxx getQueryString(params) */
const getQueryString = (param: string): string | number | null => {
    const t = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
    return null != i ? unescape(i[2]) : null;
}
/** @description 简单对象数组去重 */
const objectSaveOnly = (ary: Array<any>, keyWord: string) => {
    if (typeof ary !== 'object') {
        console.error('请确认传入的是一个数组！');
        return;
    }
    if (ary.length === 0) {//数组的长度为0不需要去重
        return;
    }
    let newAry: Array<any> = [];
    ary.forEach((element0: any, index0: number) => {
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
const SimpleArraySaveOnly = (arr: Array<any>): Array<any> => {
    return [...new Set(arr)];
}
// 防抖
const AntiShakeFun = (): any => {

}
// 节流

/** @description 获取当前月的长度 */
const getMonthLength = (Year: string, Month: string): number => {
    return parseInt(moment(`${Year}/${Month}`, 'YYYY/MM').endOf('month').format("DD"));
}
/** @description 计算指定日期(YYYY-MM-DD)到当前时间距离的天数 */
const getDistanceDays = (date1: any): string | number => {
    let date1_timeStamp = new Date(date1).valueOf() - 0;
    let date2 = getNowFormatDate();//获取YYYY-MM-DD的当前时间
    let date2_timeStamp = new Date(date2).valueOf() - 0;
    let max = 0, min = 0;
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
const getNowFormatDate = (): string => {
    let date = new Date(),
        seperator1 = '-', //格式分隔符
        year = date.getFullYear(), //获取完整的年份(4位)
        month: number | string = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate: number | string = date.getDate() // 获取当前日(1-31)
    if (month >= 1 && month <= 9) month = month + '0'  // 如果月份是个位数，在前面补0
    if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0
    let currentdate = year + seperator1 + month + seperator1 + strDate
    return currentdate
}
/** @description 效验是否数字 */
const checkIsNum = (value: string | number): Boolean => {
    const result = +value || 0;
    return !result
}
export {
    asyncSetTime,
    validateIsNumber,
    validateIsEmail,
    validateIsPhone,
    objectSaveOnly,
    SimpleArraySaveOnly,
    getQueryString,
    getMonthLength,
    getDistanceDays,
    checkIsNum
}