import { Router } from 'express';
import { validateBody, validateQuery } from '@/lib/middleware';
import { CreateMealBody, EditMealBody, DateQuery } from '@/lib/joi-types';
import db from '@/lib/db';
import { pad } from '@/lib/util';

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
		await db.execute(`
			INSERT INTO meals (date, user_id, recipe_id, meal_type)
			VALUES (?, ?, ?, ?);
		`, [
			req.body.date,
			req.userId,
			req.body.recipe_id,
			req.body.meal_type,
		]);
		res.sendStatus(201);
	} catch (e) {
		next(e);
	}
});

r.patch('/:id', validateBody(EditMealBody), async (req, res, next) => {
	try {
		const stmt = `
			UPDATE meals
			SET
				${'date' in req.body ? 'date=?, ' : ''}
				${'meal_type' in req.body ? 'meal_type=?, ' : ''}
				${'recipe_id' in req.body ? 'recipe_id=?' : ''}
			WHERE id = ?;
		`;

		const params = [];

		if ('date' in req.body) {
			const d = req.body.date;
			const year = d.getFullYear();
			const month = d.getMonth()+1;
			const day = d.getDate();
			const isoDate = `${year}-${pad(month)}-${pad(day)}`;
			params.push(isoDate);
		};
		if ('meal_type' in req.body) params.push(req.body.meal_type);
		if ('recipe_id' in req.body) params.push(req.body.recipe_id);

		await db.execute(stmt, [...params, req.params.id]);

		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

export default r;
