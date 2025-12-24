export let cities = [
	{ id: 1, name: 'Addis Ababa', country: 'Ethiopia', population: 15000000 },
	{ id: 2, name: 'Paris', country: 'France', population: 2148000 },
	{ id: 3, name: 'Tokyo', country: 'Japan', population: 37000000 },
];

// this is like the autoincreament in dbs for me here.
export let nextId = 4;
export const incrementNextId = () => {
	nextId = nextId + 1;
};
// Helper to find city index by id since deleting will mess the id to index relation.

export const findCityIndexById = (id) => {
	return cities.findIndex((city) => city.id === Number(id));
};
