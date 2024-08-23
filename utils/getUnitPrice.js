module.exports = (price, discount) => {
	const unitPrice = price * (1 - discount);

	return unitPrice;
};
