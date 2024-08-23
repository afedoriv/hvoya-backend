const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
	console.log(
		`Unhandled Exception! Shutting down the app due to ${err.name} (${err.message}).`
	);

	process.exit(1);
});

dotenv.config();

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
