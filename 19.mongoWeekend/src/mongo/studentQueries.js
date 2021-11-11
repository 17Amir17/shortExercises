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

async function getAllStudentsWithCourseAndGender(course, gender) {
  return await Student.find({
    $and: [{ courses: { $in: [course] } }, { gender }],
  });
}
module.exports = {
  getAllStudents,
  getAllStudentsWithName,
  getAllStudentsWithCourse,
  getAllStudentsWithCourseAndGender,
};
