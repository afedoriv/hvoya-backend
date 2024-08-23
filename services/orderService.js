const supabase = require('../config/supabase');

const AppError = require('../utils/appError');

exports.createOrder = async (order, amount, id) => {
	const { data, error } = await supabase
		.from('orders')
		.insert([{ ...order, totalAmount: amount, userId: id }])
		.select(
			'customer_email:email, customer_id:userId, customer_name:fullName, customer_phone:phone, order_id:orderId'
		)
		.single();

	if (error)
		throw new AppError('An order could not be created.', 500, 'OrderError');

	return data;
};

exports.createOrderItems = async (items, details) => {
	const { error } = await supabase.from('order-items').insert([...items]);

	if (error)
		throw new AppError(
			'Order could not be updated with product details.',
			500,
			'OrderItemsError',
			details
		);
};

exports.updateOrder = async (payment, id, details) => {
	const { error } = await supabase
		.from('orders')
		.update({
			chargedAmount: payment?.amount_received / 100,
			orderStatus: 'processing',
			paymentId: payment?.client_secret,
		})
		.eq('orderId', id);

	if (error)
		throw new AppError(
			'Order could not be updated with payment details.',
			500,
			'OrderUpdateError',
			details
		);
};
