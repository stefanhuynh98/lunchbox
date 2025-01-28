import express from 'express';
import cors from 'cors';
import * as routes from '@/routes';
import cookieParser from 'cookie-parser';

const app = express();

// App-wide middleware
app.use(express.json());
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}));
app.use(cookieParser());

// Define routes
app.use('/v1', routes.v1);

// Error handler
app.use((error, _req, res, _next) => {
	console.log(error);

	res
		.status(error.status || 500)
		.json({ error });
});

export default app;
