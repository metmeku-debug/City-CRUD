import express from 'express';
import dotenv from 'dotenv';
import cityRoutes from './routes/city.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/', (req, res) => {
	res.json({ message: 'City CRUD API is running!' });
});

//city routes
app.use('/cities', cityRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
