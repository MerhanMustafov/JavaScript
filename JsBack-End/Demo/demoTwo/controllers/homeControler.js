const layout = require("../views/layout");

const html = `
<div>
    <h1>HOME PAGE</h1>
    <p>Welcome to HOME PAGE</p>
</div>
`;

function homePageControler(req, res){
    res.write(layout(html, 'HOME'))
    res.end()
}

module.exports = homePageControler