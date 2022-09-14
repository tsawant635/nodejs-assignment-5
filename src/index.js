var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url === "/welcome") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Welcome to Dominos!");

    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const message = {
            phone: '18602100000',   email: 'guestcaredominos@jublfood.com'
        };
        res.end(JSON.stringify(message));

    } else {
        res.statusCode=404;
        res.end("error: page not found");
    }
}
httpServer.listen(8081, () => { console.log("server is up at 8081")});
module.exports = httpServer;
