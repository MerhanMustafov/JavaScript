const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home", { user: true });
});

module.exports = router;
