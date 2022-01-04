const layout = require("../views/layout.js");

const about = `
<h1> About page</h1>
`;

module.exports = (req, res) => {
  res.write(layout(about, "About"));
  res.end();
};
