import { Router } from 'express';
import { validateBody, validateQuery } from '@/lib/middleware';
import { CreateMealBody, DateQuery } from '@/lib/joi-types';
import db from '@/lib/db';

const r = Router();

r.get('/', validateQuery(DateQuery), async (req, res, next) => {
	const from = req.query.from?.toISOString().split('T')[0];
	const to = req.query.to?.toISOString().split('T')[0];

	let sql = `
		SELECT
			meals.id AS id,
			meals.date AS date,
			meals.meal_type AS meal_type,
			recipes.id AS recipe_id,
			recipes.name AS recipe_name
		FROM
			meals
		JOIN
			recipes ON recipes.id = meals.recipe_id
		WHERE meals.user_id=${req.userId}
	`;

	if (from && to) {
		sql += ` AND date BETWEEN "${from}" AND "${to}"`;
	} else if (from) {
		sql += ` AND date >= "${from}"`;
	} else if (to) {
		sql += ` AND date <= "${to}"`;
	}

	const [meals] = await db.query(sql);
	res.json(meals);
});

r.post('/', validateBody(CreateMealBody), async (req, res, next) => {
	try {
		await db.query('INSERT INTO meals SET ?', req.body);
		res.sendStatus(201);
	} catch (e) {
		next(e);
	}
});

export default r;
