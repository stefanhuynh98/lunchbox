import { Router } from 'express';
import { authorize, validateBody } from '@/lib/middleware';
import db from '@/lib/db';
import { CreateRecipeBody } from '@/lib/joi-types';

const r = Router();

r.get('/', authorize, async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM recipes WHERE user_id=?';
		const recipes = (await db.query(sql, req.userId))[0];
		res.json(recipes);
	} catch (err) {
		next(err);
	}
});

r.post('/', authorize, validateBody(CreateRecipeBody), async (req, res, next) => {
	try {
		if (req.body.ingredients?.length > 0) {
			await db.execute('START TRANSACTION;');
			const insertRecipeSql = 'INSERT INTO recipes (name, user_id) VALUES (?, ?);';
			const [insertRecipeResult] = await db.execute(insertRecipeSql, [req.body.name, req.userId]);
			const recipeId = insertRecipeResult.insertId;
			const sql = 'INSERT INTO ingredients (food_id, recipe_id) VALUES (?, ?);';

			for (const ingredient of req.body.ingredients) {
				await db.execute(sql, [ingredient, recipeId]);
			}

			await db.execute('COMMIT;');
			res.sendStatus(201);
		} else {
			await db.execute('INSERT INTO recipes (name, user_id) VALUES (?, ?)', [req.body.name, req.userId]);
		}

		res.sendStatus(201);
	} catch(err) {
		next(err);
	}
});

export default r;
