const AppError = require('../utils/appError');
const calculateTotal = require('../utils/calculateTotal');
const catchAsync = require('../utils/catchAsync');
const formatItems = require('../utils/formatItems');
const getDetails = require('../utils/getDetails');

const { fetchCart } = require('../services/cartService');
const {
	createOrder,
	createOrderItems,
	updateOrder,
} = require('../services/orderService');
const { processPayment } = require('../services/paymentService');

const { fields } = require('../utils/constants');

exports.validate = (req, res, next) => {
	const { order_details, payment_method_id, return_url, user_id } = req.body;

	if (!payment_method_id || !user_id) {
		return next(
			new AppError(
				'Please provide the payment method ID and user ID.',
				400,
				'ValidationError'
			)
		);
	}

	const missingFields = fields.filter((field) => !order_details?.[field]);

	if (missingFields.length > 0) {
		const message = `Please provide the required order details: ${missingFields
			.join(', ')
			.toLowerCase()}.`;

		return next(new AppError(message, 400, 'ValidationError'));
	}

	order_details.giftWrap = order_details.giftWrap ?? false;
	req.body.return_url =
		return_url || `${process.env.CLIENT_BASE_URL}/checkout`;

	next();
};

exports.checkout = catchAsync(async (req, res, next) => {
	let details;
	const { order_details, payment_method_id, return_url, user_id } = req.body;

	const cart = await fetchCart(user_id);

	const total = calculateTotal(cart);
	const order = await createOrder(order_details, total, user_id);

	const payment = await processPayment(
		payment_method_id,
		return_url,
		order,
		total
	);

	const orderId = order.order_id;
	details = getDetails(payment, orderId);

	await updateOrder(payment, orderId, details);

	const orderItems = formatItems(cart, orderId);
	await createOrderItems(orderItems, details);

	return res.status(200).json({
		status: 'success',
		data: details,
	});
});
