const supabase = require('../config/supabase');

const AppError = require('../utils/appError');

exports.fetchCart = async (id) => {
	const { data, error, count } = await supabase
		.from('user-cart-items')
		.select(
			'product:productId(discount, price:regularPrice), productQty, productId, userId',
			{ count: 'exact' }
		)
		.eq('userId', id);

	if (!count || error)
		throw new AppError('No cart items have been found.', 404, 'CartError');

	return data;
};
