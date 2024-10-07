// Create a GET about route
const getAbout = (req, res) => {
  // req is an object that contains information about the HTTP request. res is
  return res.status(200).json({
    id: 12345,
    firstName: 'Joseph',
    lastName: 'Hong',
    email: 'hongjs1@student.op.ac',
    enjoy: 'coding',
  });
};

// Export the getAbout function. Maybe used by other modules. For example, the index routes module
export { getAbout };
