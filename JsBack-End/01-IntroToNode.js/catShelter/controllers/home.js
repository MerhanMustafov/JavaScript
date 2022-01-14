const router = require("express").Router();

router.get("/", async (req, res) => {
  const cats = await req.storage.getAll();

  res.render("home.hbs", { cats });
});

module.exports = router;
