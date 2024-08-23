module.exports = (list, id) => {
	const formattedList = list.map(({ productId, productQty, userId }) => ({
		orderId: id,
		productId,
		productQty,
		userId,
	}));

	return formattedList;
};
