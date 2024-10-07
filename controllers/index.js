// Create a GET index route
const getIndex = (req, res) => {
  // req is an object that contains information about the HTTP request. res is
  return res.status(200).json({
    message: 'Hello, World!',
  });
};

// Export the getIndex function. Maybe used by other modules. For example, the index routes module
export { getIndex };
