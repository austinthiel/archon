import subscribeToMailingList from '../repositories/MailingListRepository';

const express = require('express');

const router = express.Router();

router.post('/subscribe', subscribeToMailingList);

module.exports = router;
