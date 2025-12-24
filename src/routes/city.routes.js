import express from 'express';
import { cities } from '../data/cities.js';

const router = express.Router();

// GET all cities
router.get('/', (req, res) => {
	res.json(cities);
});

export default router;
