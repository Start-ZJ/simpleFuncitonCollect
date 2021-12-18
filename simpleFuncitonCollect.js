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
//提取Url里的参数
module.exports = {
    asyncSetTime,
    validateIsNumber,
    validateIsEmail,
    objectSaveOnly
}