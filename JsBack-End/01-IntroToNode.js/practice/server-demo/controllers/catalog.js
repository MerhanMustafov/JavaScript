const layout = require("../views/layout.js");
const database = require("../util/database.js");

const catalog = (data) => `
<form method="POST" action="/create">
<lable>Name <input type="text" name="name"></lable>
<lable>Serial <input type="text" name="serial"></lable>
<input type="submit" value="crate"/>
</form>
<h1> Catalog page</h1>
${data
  .map(
    ([id, item]) =>
      `<li id="${id}">${item.name} ${item.serial} <a href=/delete?id=${id}>[DELETE]</a></li>`
  )
  .join("")}
`;

module.exports = (req, res) => {
  res.write(layout(catalog(Object.entries(database.database)), "Catalog"));
  res.end();
};
