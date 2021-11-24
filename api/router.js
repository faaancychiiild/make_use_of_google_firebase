const express = require('express'),
router = express.Router();
const Message = require('./database/models/Message');

router.post('/', (req, res) => {
    let {body, sentBy, timeStamp} = req.body;
    res.status(200).send('user created');
});

module.exports = router;
