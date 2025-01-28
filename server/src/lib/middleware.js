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

/**
 * Validate a request's body according to a given Joi Schema.
 */
export function validateBody(schema) {
	return async function(req, _, next) {
		try {
			req.body = await schema.validateAsync(req.body);
			next();
		} catch(err) {
			next(err);
		}
	}
}

/**
 * Validate a request's query string according to a given Joi Schema.
 */
export function validateQuery(schema) {
	return async function(req, _, next) {
		try {
			req.query = await schema.validateAsync(req.query);
			next();
		} catch(err) {
			next(err);
		}
	}
}
