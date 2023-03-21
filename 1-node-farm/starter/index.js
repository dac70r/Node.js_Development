// Synchronous 
const fs = require('fs'); // store object in fs variable fs module allows you to read and write fs for file system
const http = require('http')
const url = require('url');

//const textIn = fs.readFileSync('./txt/input.txt','utf-8');
//console.log(textIn);

//const textOut = `this is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`
//console.log(textOut);

// Asynchronous 
//fs.readFile('./txt/start.txt','utf-8',(err, data)=> {
//    console.log(data);
//})
//console.log('Will read this file first');

// Call backs 
//console.log('==================================');
//fs.readFile('./txt/start.txt','utf-8',(err, data1)=> {
//    if(err) return console.log('ERROR! BOOOM!');
//    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err, data2)=> {
//        console.log(data2);
//        fs.readFile(`./txt/append.txt`,'utf-8',(err, data3)=> {
//            console.log(data3);
//            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => {
//                console.log('Your file has been written');
//            })
//        })
//    })
//})
//console.log('Will read this file first bruh');
//console.log('==================================');




// Server -- sends a response whenever a request is received 
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObject = JSON.parse(data);
console.log(dataObject);

const server  = http.createServer((req, res) => {
                    //console.log(req);
                    const pathName = req.url;
                    if (pathName === '/' || pathName === '/overview')
                    {
                        res.end("Overview!");
                    }
                    else if (pathName === '/product'){
                        res.end('This is the product');
                    }
                    else if (pathName === '/api'){
                        res.writeHead(200,{'Content-type':'application/json'});
                        res.end(data); // wants to return string so data is okay, 
                    }
                    else {
                        res.writeHead(404,{
                            'Content-type':'text/html'
                        });
                        res.end('<h1>Page not found!</h1>');
                    }
});

server.listen(8000,'127.0.0.1', () => { //8000 is a sub-address // 127.0.0.1 is the address for local host 
    
    console.log('Listening to requests on port 8000');
});


