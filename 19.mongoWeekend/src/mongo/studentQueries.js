const Student = require('./models/student');

async function addStudent(name, surName, birth, phone, gender, courses) {
  const student = new Student({ name, surName, birth, phone, gender, courses });
  const res = await student.save();
  return res;
}

async function insertMany(col) {
  return await Student.insertMany(col);
}

// Query / Find Documents
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

// Update Documents

async function addStudentsCourseByName(name, course) {
  // $addToSet only appends if value does not exists
  return await Student.updateMany({ name }, { $addToSet: { courses: course } });
}

async function updateBirthByName(name, birth) {
  return await Student.updateMany({ name }, { birth });
}

// Text Search
async function findAllStudentsThatContainLetter(letter) {
  return await Student.find({ name: { $regex: new RegExp(letter) } });
}

async function findAllStudentsSurnameContains(let1, let2) {
  return await Student.find({
    $or: [
      { surName: { $regex: new RegExp(let1) } },
      { surName: { $regex: new RegExp(let2) } },
    ],
  });
}

// Delete Documents
async function deleteAllStudentsWithName(name) {
  return await Student.deleteMany({ name });
}
async function deleteAllStudentsWithDate(date) {
  return await Student.deleteMany({ birth: date });
}
module.exports = {
  insertMany,
  addStudent,
  getAllStudents,
  getAllStudentsWithName,
  getAllStudentsWithCourse,
  getAllStudentsWithCourseAndGender,
  getAllStudentsBirthGreaterThan,
  getAllStudentsNumberStartsWith,
  addStudentsCourseByName,
  updateBirthByName,
  findAllStudentsThatContainLetter,
  findAllStudentsSurnameContains,
  deleteAllStudentsWithName,
  deleteAllStudentsWithDate,
};
