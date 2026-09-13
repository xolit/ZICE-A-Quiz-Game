const router = require("express").Router();
const db = require("../../database/db");

router.get("/leaderboard", async (req, res) => {
  const leaderboard = await db.leaderboard;
  res.json(leaderboard);
});

router.get("/player/:uid", async (req, res) => {
  const { uid } = req.params;
  const playerProfile = await db.playerProfiles.find(
    (profile) => profile.UID === uid,
  );
  if (playerProfile) {
    res.json(playerProfile);
  } else {
    res.status(404).json({ error: "Player not found" });
  }
});

router.get("/players", async (req, res) => {
  try {
    const playerProfile = await db.playerProfiles;
    res.json(playerProfile);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
