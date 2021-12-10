const http = require("http");
// console.log(http)
const html = `
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>My Music Application</title>
    <link rel="stylesheet" href="/styles/style.css"/>
    <script type="module" src="/src/app.js"></script>
</head>

<body>
<main id="main-content">
<section id="welcomePage">
<div id="welcome-message">
    <h1>Welcome to</h1>
    <h1>My Music Application!</h1>
</div>
</section>
    </main>
</div>
</body>

</html>
`;

const server = http.createServer(requestHandler);
const port = 3000;
function requestHandler(req, res) {
  console.log("url:", req.url, "<<<<<>>>>", "method:", req.method);
  res.write(html);
  res.end();
}

server.listen(port, () => console.log("Server Processing", port));
