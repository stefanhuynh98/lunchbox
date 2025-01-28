import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { validateBody } from '@/lib/middleware';
import { LoginBody, RegisterBody } from '@/lib/joi-types';
import db from '@/lib/db';

const r = Router();

r.post('/register', validateBody(RegisterBody), async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const users = (await db.query('SELECT * FROM users WHERE username = ?', username))[0];

		if (users.length > 0) {
			return res
				.status(422)
				.json({ error: 'user_conflict' });
		}

		const hash = await Bun.password.hash(password, {
			algorithm: "argon2id",
			cost: 10,
		});

		const { insertId } = (await db.query('INSERT INTO users SET ?', { username, password: hash }))[0];
		const token = jwt.sign({ uid: insertId }, Bun.env['JWT_SECRET']);

		res
			.cookie('jwt', token, { httpOnly: true, secure: true })
			.status(201)
			.end();
	} catch(err) {
		next(err);
	}
});

r.post('/login', validateBody(LoginBody), async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const users = (await db.query('SELECT * FROM users WHERE username = ?', username))[0];

		if (users.length === 0) {
			return res
				.status(401)
				.json({ error: 'user_not_found' });
		}

		const isMatch = await Bun.password.verify(password, users[0].password);
		if (isMatch) {
			const token = jwt.sign({ uid: users[0].id }, Bun.env['JWT_SECRET']);
			res
				.cookie('jwt', token, { httpOnly: true, secure: true })
				.status(200)
				.end();
		} else {
			return res
				.status(401)
				.json({ error: 'invalid_credentials' });
		}
	} catch(err) {
		next(err);
	}
});

export default r;
