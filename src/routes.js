const express = require('express');
const router = express.Router();

//index
const indexRouter = express.Router();
indexRouter.get('/', function (req, res) {
  res.status(200).json({ response: 'Signup-go API is working properly.' });
});

//status
const statusRouter = express.Router();
const statusController = require('./controllers/status/index');
statusRouter.get('/', statusController.getStatus);

router.use('/', indexRouter);
router.use('/status', statusRouter);

module.exports = router;
