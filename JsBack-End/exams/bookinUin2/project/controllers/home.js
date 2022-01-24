const router = require("express").Router();

router.get("/", async (req, res) => {
  const ctx = {
    user: false,
  };
  await res.render("home", ctx);
});

module.exports = router;
