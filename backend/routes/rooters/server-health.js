const router = require("express").Router();

router.get("/health", (req, res) => {
  res.json({ message: "Server is healthy!" });
});

module.exports = router;
