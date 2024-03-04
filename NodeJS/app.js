// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<head><title>My First Time</title></head>");
//         res.write(`<body>
//     <form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>`);
//         res.write("</html>");
//         return res.end();
//     }
//     if (url === "/message" && method === "POST") {
//         const body = []
//         req.on("data", (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         return req.on("end", () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             console.log(parsedBody);
//             // fs.writeFileSync("message.txt", message);
//             fs.writeFile('messgae.txt', message, err => {
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/");
//                 return res.end();
//             });
//         });
//     }
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Time</title></head>");
//     res.write("<body><h1>Manchester is blue</h1></body>");
//     res.write("</html>");
//     res.end();
// });
// server.listen(3000);

const http = require("http");
const routes = require("./routes");

console.log(routes.sometext);

const server = http.createServer(routes.handler);
server.listen(3000);