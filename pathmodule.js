const path=require('path')
console.log(path.sep)
const a='foo\\baa\\vs'.split(path.split)
console.log(a)
const filepath=path.join('./content','jaa','app.txt')
console.log(filepath)
const base=path.basename(filepath)
console.log(base)