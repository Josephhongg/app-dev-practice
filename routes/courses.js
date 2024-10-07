// Import the Express module
import express from 'express';

// Import the courses controllers module
import { getCourses } from '../controllers/courses.js';

// Create an Express router
const router = express.Router();

// Create a GET route
router.get('/', getCourses);

// Export the router
export default router;
