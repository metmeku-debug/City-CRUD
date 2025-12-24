import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Temporary in-memory data (will move this later)
let cities = [];

// Basic check
app.get('/', (req, res) => {
	res.json({ message: 'City CRUD API is running!' });
});

app.get('/cities', (req, res) => {
	res.json(cities);
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
