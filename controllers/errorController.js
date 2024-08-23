const AppError = require('../utils/appError');

const handleStripeError = (err) => {
	if (err.errorCode === 'StripeCardError') return err;

	return new AppError(
		'Payment could not be completed. Please try again.',
		err.statusCode,
		err.errorCode
	);
};

const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		errorCode: err.errorCode,
		message: err.message,
		details: err.details,
		error: err,
		stack: err.stack,
	});
};

const sendErrorProd = (err, res) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			errorCode: err.errorCode,
			message: err.message,
			details: err.details,
		});
	} else {
		console.error(err);

		res.status(500).json({
			status: 'error',
			errorCode: 'InternalServerError',
			message:
				'An internal server error occurred during the checkout process.',
			details: null,
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';
	err.errorCode = err.errorCode || 'InternalServerError';
	err.details = err.details || null;

	if (process.env.NODE_ENV === 'development') {
		sendErrorDev(err, res);
	} else if (process.env.NODE_ENV === 'production') {
		let error = { ...err };

		error.message = err.message;

		if (error.errorCode.includes('Stripe'))
			error = handleStripeError(error);

		sendErrorProd(error, res);
	}
};
