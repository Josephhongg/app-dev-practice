// Import the Express module
import express from 'express';

// Import the about controllers module
import { getAbout } from '../controllers/about.js';

// Create an Express router
const router = express.Router();

// Create a GET route
router.get('/', getAbout);

// Export the router
export default router;
