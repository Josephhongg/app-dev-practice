// Import the Express Module
import express from 'express';

// Import the index routes module
import indexRoutes from './routes/index.js';

// Import the about routes module
import aboutRoutes from './routes/about.js';

// Import the courses routes module
import coursesRoutes from './routes/courses.js';

// Create an Express application
const app = express();

// Use the PORT environment variable or 3000
const PORT = process.env.PORT || 3000;

// Use the routes modules
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/courses', coursesRoutes);

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Visit http://localhost:${PORT}`,
  );
});

// Export the Express application. May be used by other modules. For example,
export default app;
