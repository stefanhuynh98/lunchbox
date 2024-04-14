import { Router } from 'express';
import { validateBody, validateQuery } from '@/lib/middleware';
import db from '@/lib/db';
import { CreateFoodBody, Query } from '@/lib/joi-types';

const r = Router();

r.get('/', validateQuery(Query), async (req, res, next) => {
	const {
		query,
		page,
		perPage,
	} = req.query;

	let stmt = `
			SELECT * FROM foods
			${query ? `WHERE name LIKE ?` : ''}
			ORDER BY name, id
			LIMIT ?
			OFFSET ?
		`;

	const [foods] = await db.execute(stmt, query
		? [`%${query}%`, perPage, page-1]
		: [perPage, page-1]
	);

	res.json(foods);
});

r.post('/', validateBody(CreateFoodBody), async (req, res, next) => {
	try {
		const result = await db.query('INSERT INTO foods SET ?', req.body);
		res.sendStatus(201);
	} catch (err) {
		next(err);
	}
});

export default r;
