import Joi from 'joi';

export function validateBody(schema) {
	return async function(req, res, next) {
		try {
			await schema.validateAsync(req.body);
			next();
		} catch(err) {
			next(err);
		}
	}
}
