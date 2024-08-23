const stripe = require('../config/stripe');
const supabase = require('../config/supabase');

const AppError = require('../utils/appError');
const getParams = require('../utils/getParams');

exports.processPayment = async (id, url, order, total) => {
	try {
		const params = getParams(id, url, order, total);
		const payment = await stripe.paymentIntents.create(params);

		return payment;
	} catch (err) {
		await supabase.from('orders').delete().eq('orderId', order.order_id);

		throw new AppError(err.message, err.statusCode, err.type);
	}
};
