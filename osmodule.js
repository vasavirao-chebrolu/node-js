const os=require('os')
const a=os.userInfo()
console.log(a)
console.log(`the system uptime is ${os.uptime}seconds`)
const osfunc={
	name:os.type(),
	release:os.release(),
	totlmem:os.totalmem(),
	freemem:os.freemem(),
}
console.log(osfunc)