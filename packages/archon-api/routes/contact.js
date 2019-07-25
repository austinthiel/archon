const express = require('express');

const router = express.Router();

/* GET blog listing. */
router.get('/', (req, res) => {
  res.send('hello from contact!');
});

module.exports = router;
