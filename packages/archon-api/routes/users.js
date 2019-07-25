const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send([
    {
      a: 1,
    },
    {
      b: 2,
    },
  ]);
});

module.exports = router;
