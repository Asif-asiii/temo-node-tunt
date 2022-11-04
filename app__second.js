const http = require("http");
//create server now
//req stands for request
//res stands for response
var server = http.createServer((req,res)=>{
res.write("welcome to Al_Manzoor College");
res.end();
})

server.listen(5000);