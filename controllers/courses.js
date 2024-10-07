// Create a GET courses route
const getCourses = (req, res) => {
  // req is an object that contains information about the HTTP request. res is
  res.status(200).json({
    courses: 'Intro App Dev',
  });
};

export { getCourses };
