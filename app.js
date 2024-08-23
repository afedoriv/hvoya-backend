const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const checkoutRouter = require('./routes/checkoutRoutes');

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: process.env.CLIENT_BASE_URL }));
app.options('*', cors());

app.use('/api/v1/checkout', checkoutRouter);

app.all('*', (req, res, next) => {
	next(
		new AppError(
			`Cannot find '${req.originalUrl}' on the server.`,
			404,
			'NotFound'
		)
	);
});

app.use(globalErrorHandler);

module.exports = app;
