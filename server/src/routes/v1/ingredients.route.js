import { Router } from 'express';
import { authorize, validateBody } from '@/lib/middleware';
import db from '@/lib/db';

const r = Router();

r.get('/', async (req, res, next) => {
	const [ingredients] = await db.query('SELECT * FROM ingredients');
	res.json(ingredients);
});

export default r;
