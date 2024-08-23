module.exports = (id, url, order, amount) => {
	return {
		amount: Math.round(amount * 100),
		currency: 'USD',
		description: `Order Number: ${order.order_id}`,
		metadata: { ...order },
		payment_method: id,
		receipt_email: order.customer_email,
		return_url: url,
		automatic_payment_methods: {
			enabled: true,
			allow_redirects: 'never',
		},
		confirm: true,
	};
};
