const http  =  require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');

    }
    if(req.url === '/about'){
        res.end('here is our short intro');
    }
    res.end(`
    <h1> Oops ... ! </h1>
    <p> Sorry we can't find the page you are looking for </p>
    <a href = "/"> back to home </a>
    `);
});

server.listen(5000);
