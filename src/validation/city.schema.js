import Joi from 'joi';

// Base schema for my city fields
const cityBaseSchema = Joi.object({
	name: Joi.string().trim().min(2).max(100).required().messages({
		'string.min': 'Name must be at least 2 characters',
		'string.max': 'Name must be at most 100 characters',
		'any.required': 'Name is required',
	}),

	country: Joi.string().trim().min(2).max(100).required().messages({
		'string.min': 'Country must be at least 2 characters',
		'string.max': 'Country must be at most 100 characters',
		'any.required': 'Country is required',
	}),

	population: Joi.number().integer().min(0).optional().messages({
		'number.base': 'Population must be a number',
		'number.integer': 'Population must be an integer',
		'number.min': 'Population cannot be negative',
	}),
});

// For POST: all fields as defined
export const createCitySchema = cityBaseSchema;

// For PUT: all fields optional except require at least one to update
export const updateCitySchema = cityBaseSchema.fork(['name', 'country', 'population'], (field) =>
	field.optional()
);
