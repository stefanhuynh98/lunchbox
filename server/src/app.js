import express from 'express';
import cors from 'cors';
import * as routes from '@/routes';
import cookieParser from 'cookie-parser';

const app = express();

// App-wide middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(cookieParser());

// Define routes
app.use('/v1', routes.v1);

// Error handler
app.use((error, req, res, next) => {
	console.log(error);

	res
		.status(error.status || 500)
		.json({ error });
});

export default app;
