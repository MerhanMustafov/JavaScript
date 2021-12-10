const layout = require("../views/layout");

const html = `
<div>
    <h1>About us</h1>
    <p>ABOUT PAGE</p>
</div>
`;

module.exports = (req, res) => {
    res.write(layout(html, 'ABOUT'))
    res.end()
}