module.exports = (payment, id) => {
	return {
		order: { id },
		payment: {
			charge_id: payment.latest_charge,
			charged_amount: payment.amount_received / 100,
			client_secret: payment.client_secret,
			currency: payment.currency,
			payment_intent_id: payment.id,
			payment_method_id: payment.payment_method,
			receipt_email: payment.receipt_email,
			status: payment.status,
		},
	};
};
