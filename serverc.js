const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to the home page and the server is created")
    }
    if(req.url==='/about'){
        res.end("this is the about page of the webpage")
    }
    res.end(`
    <a href="/">home page</a>
    <h1>page error</h1>`)
})
server.listen(5000)