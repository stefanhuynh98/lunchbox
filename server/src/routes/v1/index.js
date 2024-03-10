import { Router } from 'express';
import auth from './auth.route';

const r = Router();

r.use('/auth', auth);

export default r;
