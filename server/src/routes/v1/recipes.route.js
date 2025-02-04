import { Router } from 'express';
import { validateBody, validateQuery } from '@/lib/middleware';
import db from '@/lib/db';
import { CreateRecipeBody, Query } from '@/lib/joi-types';

const r = Router();

r.get('/', validateQuery(Query), async (req, res, _next) => {
	const {
		query,
		page,
		perPage,
	} = req.query;

	let stmt = `
		SELECT
			recipes.id AS id,
			recipes.name AS name,
			SUM(foods.calories) AS calories,
			SUM(foods.carbs) AS carbs,
			SUM(foods.protein) AS protein,
			SUM(foods.sugars) AS sugars,
			SUM(foods.fats) AS fats,
			SUM(foods.salt) AS salt
		FROM
			recipes
		JOIN
			ingredients ON recipes.id = ingredients.recipe_id
		JOIN
			foods ON ingredients.food_id = foods.id
		WHERE
			recipes.user_id = ?
			${query ? `AND recipes.name LIKE ?` : ''}
		GROUP BY
			recipes.id
		ORDER BY
			recipes.name,
			recipes.id
		LIMIT
			?
		OFFSET
			?;
		`;

	const [recipes] = await db.execute(stmt, query
		? [req.userId, `%${query}%`, perPage, page-1]
		: [req.userId, perPage, page-1]
	);

	res.json(recipes);
});

r.get('/:id', async (req, res, _next) => {
	const { id } = req.params;
	let stmt = `
		SELECT
			recipes.id AS id,
			foods.name AS name,
			foods.calories,
			foods.protein,
			foods.fats,
			foods.carbs,
			foods.sugars,
			foods.salt,
			foods.unit,
			ingredients.amount
		FROM
			recipes
		JOIN
			ingredients ON recipes.id = ingredients.recipe_id
		JOIN
			foods ON ingredients.food_id = foods.id
		WHERE
			recipes.user_id = ?
		AND
			recipes.id = ?;
	`;

	const [ingredients] = await db.execute(stmt, [req.userId, id]);
	const [recipe] = (await db.execute('SELECT * FROM recipes WHERE user_id=? AND id=?', [req.userId, id]))[0];

	res.json({ ...recipe, ingredients });
});

r.post('/', validateBody(CreateRecipeBody), async (req, res, next) => {
	try {
		if (req.body.ingredients?.length > 0) {
			await db.execute('START TRANSACTION;');

			const insertRecipeSql = 'INSERT INTO recipes (name, user_id) VALUES (?, ?);';
			const [insertRecipeResult] = await db.execute(insertRecipeSql, [req.body.name, req.userId]);
			const recipeId = insertRecipeResult.insertId;

			const sql = 'INSERT INTO ingredients (food_id, recipe_id, amount) VALUES (?, ?, ?);';

			for (const { food_id, amount } of req.body.ingredients) {
				await db.execute(sql, [food_id, recipeId, amount]);
			}

			await db.execute('COMMIT;');
		} else {
			await db.execute('INSERT INTO recipes (name, user_id) VALUES (?, ?)', [req.body.name, req.userId]);
		}

		res.sendStatus(201);
	} catch(err) {
		next(err);
	}
});

export default r;
