const layout = require("../views/layout.js");
const home = `
<h1> Home Page</h1>
`;

module.exports = (req, res) => {
  res.write(layout(home));
  res.end();
};
