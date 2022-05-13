const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./first.txt','utf8')
const second=readFileSync('./second.txt','utf8')
console.log(first)
console.log(second)
writeFileSync('./result.txt',
`${first},${second}`,{flag:'a'})