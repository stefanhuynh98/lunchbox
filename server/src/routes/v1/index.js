import { Router } from 'express';
import auth from './auth.route';
import recipes from './recipes.route';
import meals from './meals.route';
import foods from './foods.route';
import { authorize } from '@/lib/middleware';

const r = Router();

r.use('/auth', auth);
r.use('/recipes', recipes);
r.use('/meals', meals);
r.use('/foods', foods);
r.use('/ping', authorize, (req, res, next) => {
	res.send('pong!');
});

export default r;
