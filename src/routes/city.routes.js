import express from 'express';
import { cities, nextId, findCityIndexById, incrementNextId } from '../data/cities.js';

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
router.post('/', (req, res) => {
	const { name, country, population } = req.body;

	if (!name || !country) {
		return res.status(400).json({ error: 'Name and country are required' });
	}

	const newCity = {
		id: nextId,
		name: String(name).trim(),
		country: String(country).trim(),
		population: population ? Number(population) : null,
	};
	incrementNextId();
	cities.push(newCity);
	res.status(201).json(newCity);
});

//update existing city
router.put('/:id', (req, res) => {
	const index = findCityIndexById(req.params.id);
	if (index === -1) {
		return res.status(404).json({ error: 'City not found' });
	}

	const { name, country, population } = req.body;

	if (!name || !country) {
		return res.status(400).json({ error: 'Name and country are required' });
	}

	cities[index] = {
		...cities[index],
		name: String(name).trim(),
		country: String(country).trim(),
		population: population !== undefined ? Number(population) : cities[index].population,
	};

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
