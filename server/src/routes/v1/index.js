import { Router } from 'express';
import auth from './auth.route';
import recipes from './recipes.route';
import meals from './meals.route';
import foods from './foods.route';
import { authorize } from '@/lib/middleware';

const r = Router();

r.use('/auth', auth);
r.use('/recipes', authorize, recipes);
r.use('/meals', authorize, meals);
r.use('/foods', authorize, foods);
r.use('/ping', authorize, (req, res, next) => {
	res.send('pong!');
});

export default r;
