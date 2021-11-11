const Student = require('./models/student');

async function getAllStudents() {
  return await Student.find({});
}

async function getAllStudentsWithName(name) {
  return await Student.find({ name });
}

async function getAllStudentsWithCourse(course) {
  return await Student.find({ courses: { $in: [course] } });
}

module.exports = {
  getAllStudents,
  getAllStudentsWithName,
  getAllStudentsWithCourse,
};
