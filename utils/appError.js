class AppError extends Error {
	constructor(message, statusCode, errorCode, details) {
		super(message);

		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this.errorCode = errorCode;
		this.details = details || null;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = AppError;
