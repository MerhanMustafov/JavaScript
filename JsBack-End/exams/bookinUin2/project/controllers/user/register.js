const router = require("express").Router();

router.get("/", async (req, res) => {
  const ctx = {
    user: false,
  };
  res.render("register", ctx);
});

module.exports = router;
