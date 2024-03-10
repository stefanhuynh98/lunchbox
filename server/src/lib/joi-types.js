import Joi from 'joi';

export const LoginBody = Joi.object({
	username: Joi.string().alphanum().required(),
	password: Joi.string().required(),
});

export const RegisterBody = Joi.object({
	username: Joi.string().alphanum().required(),
	password: Joi.string().required(),
});
