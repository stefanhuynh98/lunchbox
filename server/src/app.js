import express from 'express';
import cors from 'cors';
import * as routes from '@/routes';

const app = express();

// App-wide middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Define routes
app.use('/v1', routes.v1);

// Error handler
app.use((error, req, res, next) => {
	switch (error) {
		case 'user_conflict':
			res.status(422);
			break;
		default:
			res.status(500);
	}

	res.json({ error });
});

export default app;
