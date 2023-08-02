// @ts-nocheck
const path = require("path");//引入路径模块
const fs = require("fs");//引入文件模块
const getNewVersion = (arr) => {
    if (arr[2] < 9) {
        arr[2] = +arr[2] + 1
    } else if (arr[1] < 9) {
        arr[1] = +arr[1] + 1
        arr[2] = 0
    } else {
        arr[0] = +arr[0] + 1
        arr[1] = 0
        arr[2] = 0
    }
    return arr
}
/** @description 读取package  */
const changePackageVersion = () => {
    let packagePathName = path.join(__dirname, './../../package.json')//拼接用来读取的文件路径，当前路径加上config.js
    let packageText = fs.createReadStream(packagePathName)//创建可读流
    packageText.setEncoding("utf8");//设置文件编码
    packageText.on("data", function (chunk) {
        let newPackageText = JSON.parse(chunk);
        let arr = newPackageText.version.split('.');//切割后的版本号数组
        arr = getNewVersion(arr);
        newPackageText.version = arr.join('.');//转换为以"."分割的字符串    
        fs.writeFile(packagePathName, JSON.stringify(newPackageText, null, "\t"), () => { });//用packageData覆盖package.json内容
        changeHTmlVerion(arr.join('.'))
    })
}

/** @description 读取package  */
const changeHTmlVerion = (newVersion) => {
    let htmlPathName = path.join(__dirname, './../index.html')
    let htmlText = fs.createReadStream(htmlPathName);
    htmlText.setEncoding("utf8");
    htmlText.on("data", function (chunk) {
        let chunkStart = 0, chunkEnd = 0;
        chunkStart = chunk.indexOf(`src="./app_`);
        chunkEnd = chunk.indexOf(`.js" fs="true"`);
        const newHtmlText = `${chunk.substring(0, chunkStart + 11)}${newVersion}${chunk.substring(chunkEnd, chunk.length)}`;
        fs.writeFile(htmlPathName, newHtmlText, () => { });//用packageData覆盖package.json内容
    })
}
changePackageVersion();