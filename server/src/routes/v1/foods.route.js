import { Router } from 'express';
import { authorize, validateBody } from '@/lib/middleware';
import db from '@/lib/db';
import { CreateFoodBody } from '@/lib/joi-types';

const r = Router();

r.get('/', async (req, res, next) => {
	const [foods] = await db.query('SELECT * FROM foods');
	res.json(foods);
});

r.post('/', authorize, validateBody(CreateFoodBody), async (req, res, next) => {
	try {
		const result = await db.query('INSERT INTO foods SET ?', req.body);
		res.sendStatus(201);
	} catch (err) {
		next(err);
	}
});

export default r;
