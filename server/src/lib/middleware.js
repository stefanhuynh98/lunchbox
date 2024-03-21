import Joi from 'joi';
import jwt from 'jsonwebtoken';

/**
 * Authorizes a client by the JWT expected from the cookie.
 *
 * Depends on `cookie-parser` library
 */
export function authorize(req, res, next) {
	if (req.cookies.jwt) {
		try {
			const { uid } = jwt.verify(req.cookies.jwt, Bun.env['JWT_SECRET']);
			req.userId = uid;
			next();
		} catch {
			res.sendStatus(403);
		}
	} else {
		res.sendStatus(403);
	}
}

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

export function validateQuery(schema) {
	return async function(req, res, next) {
		try {
			await schema.validateAsync(req.query);
			next();
		} catch(err) {
			next(err);
		}
	}
}
