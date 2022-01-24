const router = require("express").Router();

router.get("/", async (req, res) => {
  const ctx = {
    user: false,
  };
  res.render("login", ctx);
});

module.exports = router;
