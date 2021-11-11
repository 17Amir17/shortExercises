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

async function getAllStudentsBirthGreaterThan(birth) {
  return await Student.find({ birth: { $gt: birth } });
}

async function getAllStudentsNumberStartsWith(number) {
  return await Student.find({ phone: { $regex: new RegExp(`^${number}`) } });
}

async function addStudentsCourseByName(name, course) {
  // $addToSet only appends if value does not exists
  return await Student.updateMany({ name }, { $addToSet: { courses: course } });
}

async function updateBirthByName(name, birth) {
  return await Student.updateMany({ name }, { birth });
}

module.exports = {
  getAllStudents,
  getAllStudentsWithName,
  getAllStudentsWithCourse,
  getAllStudentsWithCourseAndGender,
  getAllStudentsBirthGreaterThan,
  getAllStudentsNumberStartsWith,
  addStudentsCourseByName,
  updateBirthByName,
};
