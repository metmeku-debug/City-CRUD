# City CRUD API

A basic Express.js REST API for managing a `City` resource using an in-memory array (no database required). Built with modern JavaScript practices for a clean, professional structure.
## Features

- Full CRUD operations:
  - Create a city (`POST /cities`)
  - Read all or one by ID (`GET /cities`, `GET /cities/:id`)
  - Update a city (`PUT /cities/:id`)
  - Delete a city (`DELETE /cities/:id`)
- Auto-incrementing IDs
- Input validation with **Joi** (custom error messages)
- Proper HTTP status codes (201, 204, 404, 400)
- Clean, modular code structure
- Environment-based port configuration
- Development mode with auto-restart (`nodemon`)

## Tech Stack

- Node.js
- Express.js
- Joi (validation)
- dotenv (environment variables)

## Prerequisites
- Node.js (v18+ recommended)
- npm
## Installation
Clone the repo:

```
git clone https://github.com/metmeku-debug/City-CRUD
```
```
cd City-CRUD
```
Install dependencies:
```
npm install
```
## Running the API

Development mode (auto-restarts on changes):
```
npm run dev
```
Production mode:
```
npm start
```
The server will run at http://localhost:3000 (or your PORT if you add .env file with your port of PORT).
## API Endpoints

Base URL: `http://localhost:3000/cities`

- **GET** `/cities` – List all cities
- **GET** `/cities/:id` – Get a city by ID (404 if not found)
- **POST** `/cities` – Create a new city (201 on success, 400 on validation error)
- **PUT** `/cities/:id` – Update a city (full or partial, 404 if not found)
- **DELETE** `/cities/:id` – Delete a city (204 on success, 404 if not found)

### Request Examples Using curl
Get
```
curl http://localhost:3000/cities

```
Post
```
curl -X POST http://localhost:3000/cities \
  -H "Content-Type: application/json" \
  -d '{"name":"Berlin","country":"Germany","population":3700000}'
```
Put(update)
```
# Update population only
curl -X PUT http://localhost:3000/cities/1 \
  -H "Content-Type: application/json" \
  -d '{"population":5000000}'
```
```
# Full update
curl -X PUT http://localhost:3000/cities/4 \
  -H "Content-Type: application/json" \
  -d '{"name":"New Berlin","country":"Germany","population":3800000}'
```
Delete
```
curl -X DELETE http://localhost:3000/cities/2
```
## Validation (Joi)

- **name**: required, string, 2–100 characters
- **country**: required, string, 2–100 characters
- **population**: optional, non-negative integer

Invalid requests return 400 with clear error details.

## Project(Folder) Structure
```
src/
├── server.js              # App setup & server start
├── data/
│   └── cities.js          # In-memory data & helpers
├── routes/
│   └── city.routes.js     # CRUD routes
├── middleware/
│   └── validate.js        # Validation middleware
└── validation/
    └── city.schema.js     # Joi schemas
```
## Notes

* Data is stored in memory only → resets when server restarts
