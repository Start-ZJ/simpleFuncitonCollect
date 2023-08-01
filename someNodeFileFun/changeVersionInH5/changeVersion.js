const path = require("path");//引入路径模块
const fs = require("fs");//引入文件模块

/** @description 读取package  */
let pathName = path.join(__dirname, './../../package.json')//拼接用来读取的文件路径，当前路径加上config.js
let packageText = fs.createReadStream(pathName)//创建可读流
packageText.setEncoding("utf8");//设置文件编码
packageText.on("data", function (chunk) {
    // @ts-ignore
    let newPackageText = JSON.parse(chunk);
    let arr = newPackageText.version.split('.');//切割后的版本号数组
    arr[2] = parseInt(arr[2]) + 1;//版本更新的逻辑还要再完善后一下
    newPackageText.version = arr.join('.');//转换为以"."分割的字符串    
    fs.writeFile(pathName, JSON.stringify(newPackageText, null, "\t"), () => { });//用packageData覆盖package.json内容
})