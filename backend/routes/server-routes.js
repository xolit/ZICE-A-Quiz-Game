const router = require("express").Router();
// rooters
const health = require("./rooters/server-health");
const gameEnd = require("./rooters/game-end");

router.use(health);
router.use(gameEnd);

module.exports = router;
