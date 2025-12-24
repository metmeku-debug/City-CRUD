import express from 'express';
import { cities, nextId, findCityIndexById, incrementNextId } from '../data/cities.js';
import validate from '../middleware/validate.js';
import { createCitySchema, updateCitySchema } from '../validation/city.schema.js';

const router = express.Router();

// GET all cities
router.get('/', (req, res) => {
	res.json(cities);
});

// GET one city by id
router.get('/:id', (req, res) => {
	const index = findCityIndexById(req.params.id);
	if (index === -1) {
		return res.status(404).json({ error: 'City not found' });
	}
	res.json(cities[index]);
});

// POST create new city
router.post('/', validate(createCitySchema), (req, res) => {
	const newCity = {
		id: nextId,
		...req.body, // Already validated and trimmed
	};
	incrementNextId();
	cities.push(newCity);
	res.status(201).json(newCity);
});

//update existing city
router.put('/:id', validate(updateCitySchema), (req, res) => {
	const index = findCityIndexById(req.params.id);
	if (index === -1) {
		return res.status(404).json({ error: 'City not found' });
	}

	// Merge validated updates (PUT allows partial since schema makes fields optional)
	cities[index] = { ...cities[index], ...req.body };
	res.json(cities[index]);
});

// DELETE city
router.delete('/:id', (req, res) => {
	const index = findCityIndexById(req.params.id);
	if (index === -1) {
		return res.status(404).json({ error: 'City not found' });
	}

	cities.splice(index, 1);
	res.status(204).send(); // No Content
});

export default router;
