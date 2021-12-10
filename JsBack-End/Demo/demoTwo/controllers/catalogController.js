const layout = require("../views/layout");

const html = `
<div>
    <h1>CATALOG</h1>
    <p>Welcome to Catalog</p>
</div>
`;

module.exports = (req, res) => {
    res.write(layout(html, 'CATALOG'))
    res.end()
}