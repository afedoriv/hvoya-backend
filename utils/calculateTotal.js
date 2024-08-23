const getUnitPrice = require('./getUnitPrice');
const { FREE_SHIPPING_LIMIT, SHIPPING_FEE } = require('../utils/constants');

module.exports = (items) => {
	const subtotal = items.reduce(
		(sum, { product: { discount, price }, productQty }) =>
			sum + productQty * getUnitPrice(price, discount),
		0
	);
	const total =
		subtotal > 0 && subtotal < Number(FREE_SHIPPING_LIMIT)
			? subtotal + Number(SHIPPING_FEE)
			: subtotal;

	return total;
};
