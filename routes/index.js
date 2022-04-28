var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  // const result = await db.query("SELECT 1 + 1");
  const result = await db.query("SELECT NOW()");
  res.json(result);
});

module.exports = router;
