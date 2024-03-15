import { Router } from 'express';
import { authorize, validateBody } from '@/lib/middleware';
import { CreateMealBody } from '@/lib/joi-types';
import db from '@/lib/db';

const r = Router();

r.get('/', authorize, async (req, res, next) => {
	const [meals] = await db.query('SELECT * FROM meals');
	res.json(meals);
});

r.post('/', authorize, validateBody(CreateMealBody), async (req, res, next) => {
	try {
		await db.query('INSERT INTO meals SET ?', req.body);
		res.sendStatus(201);
	} catch (e) {
		next(e);
	}
});

export default r;
