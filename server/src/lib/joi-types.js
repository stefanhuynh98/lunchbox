const Joi = require('joi')
    .extend(require('@joi/date'));

export const LoginBody = Joi.object({
	username: Joi.string().alphanum().required(),
	password: Joi.string().required(),
});

export const RegisterBody = Joi.object({
	username: Joi.string().alphanum().required(),
	password: Joi.string().required(),
});

export const CreateRecipeBody = Joi.object({
	name: Joi.string().required(),
	ingredients: Joi.array().items({
		food_id: Joi.number().required(),
		amount: Joi.number().required(),
	}),
});

export const CreateFoodBody = Joi.object({
	name: Joi.string().required(),
	calories: Joi.number().required(),
	fats: Joi.number().required(),
	protein: Joi.number().required(),
	carbs: Joi.number().required(),
	sugars: Joi.number().required(),
	salt: Joi.number(),
	unit: Joi.string().valid('ml', 'g'),
});

export const CreateMealBody = Joi.object({
	date: Joi.date().format('YYYY-MM-DD'),
	user_id: Joi.number().required(),
	recipe_id: Joi.number().required(),
	meal_type: Joi.valid('breakfast', 'lunch', 'dinner').required(),
});

export const EditMealBody = Joi.object({
	date: Joi.date().format('YYYY-MM-DD'),
	recipe_id: Joi.number(),
	meal_type: Joi.valid('breakfast', 'lunch', 'dinner'),
});

export const DateQuery = Joi.object({
	from: Joi.date(),
	to: Joi.date(),
});

export const Query = Joi.object({
	query: Joi.string().optional().allow(null, ''),
	page: Joi.number().optional().default(1),
	perPage: Joi.number().optional().default(10),
});
