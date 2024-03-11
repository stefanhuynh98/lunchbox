import Joi from 'joi';

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
	ingredients: Joi.array(),
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
