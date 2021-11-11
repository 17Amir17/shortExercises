const mongoClient = require('./mongo/mongoClient');
const studentQueries = require('./mongo/queries/studentQueries');

mongoClient.init().then(
  async () => {
    // Query Find
    const all = await studentQueries.getAllStudents();
    console.log(all.length);
    const ido = await studentQueries.getAllStudentsWithName('Ido');
    console.log('Names\n', ido);
    const law = await studentQueries.getAllStudentsWithCourse('Law');
    console.log('Law\n', law);
    const javaAndFemale =
      await studentQueries.getAllStudentsWithCourseAndGender('Java', 'Female');
    console.log('Female and java\n', javaAndFemale);
    const young = await studentQueries.getAllStudentsBirthGreaterThan(
      new Date('05/05/1998') //MM/DD/YYYY
    );
    console.log('After 05/05/1998\n', young);
    const phone054 = await studentQueries.getAllStudentsNumberStartsWith('054');
    console.log('054 Gang\n', phone054);
    // Update Documents
    await studentQueries.addStudentsCourseByName('Yahalom', 'Javascript');
    await studentQueries.updateBirthByName('Koren', new Date('02/12/1998'));
    // Text Search
    const haveO = await studentQueries.findAllStudentsThatContainLetter('o');
    console.log('Have o gang\n', haveO);
    const haveHorY = await studentQueries.findAllStudentsSurnameContains(
      'h',
      'y'
    );
    console.log('HaveHorY gang\n', haveHorY);
    // Delete Document
    await studentQueries.deleteAllStudentsWithName('Ido');
    console.log(await studentQueries.getAllStudentsWithName('Ido'));
    await studentQueries.deleteAllStudentsWithDate(new Date('04/02/1998'));
    console.log(await studentQueries.getAllStudentsWithName('Oryan'));
    mongoClient.close();
  },
  (err) => mongoClient.close()
);
