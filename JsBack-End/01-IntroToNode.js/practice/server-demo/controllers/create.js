const formParse = require("../util/formParser.js");
const database = require("../util/database.js");

module.exports = async (req, res) => {
  const body = await formParse(req);

  database.addItem(body);

  res.writeHead(301, {
    Location: "/catalog",
  });
  res.end();

  // let body = "";
  // req.on("data", (data) => {
  //   body += data;
  // });
  // req.on("end", () => {
  //   console.log(body);
  // });

  // res.writeHead(301, {
  //   Location: "/catalog",
  // });
  // res.end();
};
