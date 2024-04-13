import { Router } from 'express';
import { validateBody, validateQuery } from '@/lib/middleware';
import db, { select } from '@/lib/db';
import { CreateFoodBody, Query } from '@/lib/joi-types';

const r = Router();

r.get('/', validateQuery(Query), async (req, res, next) => {
	const { query, page, perPage } = req.query;
	const args = { queryBy: 'name', orderBy: ['name', 'id'] };

	if (page) args.offset = page-1 < 0 ? 0 : page-1;
	if (perPage) args.limit = perPage;
	if (query) args.query = query;

	res.json(await select('foods', args));
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
