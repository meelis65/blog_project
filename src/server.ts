import http from 'http';
import App from './app';

// const server : http.Server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello');
// });


const httpServer = http.createServer(App);

httpServer.listen(3000,()=>{
    console.log('Server started on http://localhost:3000');
});