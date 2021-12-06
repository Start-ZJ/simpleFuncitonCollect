// 执行一些简单的延时操作
asyncSetTime = (funName, time) => {
    if (funName && typeof funName === "function") {
        setTimeout(() => { funName() }, time);
    }
}
module.exports = {
    asyncSetTime
}