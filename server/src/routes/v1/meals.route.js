import { Router } from 'express';
import { authorize, validateBody, validateQuery } from '@/lib/middleware';
import { CreateMealBody, DateQuery } from '@/lib/joi-types';
import db from '@/lib/db';

const r = Router();

r.get('/', authorize, validateQuery(DateQuery), async (req, res, next) => {
	const { from, to } = req.query;
	let sql = 'SELECT * FROM meals';

	if (from && to) {
		sql += ` WHERE date BETWEEN "${from}" AND "${to}"`;
	} else if (from) {
		sql += ` WHERE date >= "${from}"`;
	} else if (to) {
		sql += ` WHERE date <= "${to}"`;
	}

	const [meals] = await db.query(sql);
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
