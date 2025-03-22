import http  from 'http';
import app from './app/app.js';



const PORT = 8945;

const server = http.createServer(app); // telling express to listen for requests, to handle incomming http requests.

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});