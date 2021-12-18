require('./simpleFuncitonCollect')
let list = [];
for (let i = 0; i < 5; i++) {
    list.push({
        name: '小红',
        age: i
    })
}
console.log(objectSaveOnly(list, 'age')); 