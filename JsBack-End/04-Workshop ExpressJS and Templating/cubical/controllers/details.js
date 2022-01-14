module.exports = {
  details: async (req, res) => {
    const cube = await req.storage.getById(req.params.id);
    console.log(cube);
    if (cube == undefined) {
      res.redirect("/404");
    } else {
      const ctx = {
        title: "Cube",
        cube,
      };
      res.render("details", ctx);
    }
  },
};
