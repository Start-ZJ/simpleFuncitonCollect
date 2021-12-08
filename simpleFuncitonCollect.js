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
//提取Url里的参数
module.exports = {
    asyncSetTime,
    validateIsNumber,
    validateIsEmail
}