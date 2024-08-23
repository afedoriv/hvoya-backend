const checkoutController = require('../controllers/checkoutController');
const { Router } = require('express');

const router = Router();

router
	.route('/')
	.post(checkoutController.validate, checkoutController.checkout);

module.exports = router;
