const mongoClient = require('./mongo/mongoClient');
const studentQueries = require('./mongo/studentQueries');

mongoClient.init().then(async () => {
  const all = await studentQueries.getAllStudents();
  console.log(all.length);
  const ido = await studentQueries.getAllStudentsWithName('Ido');
  console.log('Names, ', ido);
  const law = await studentQueries.getAllStudentsWithCourse('Law');
  console.log('Law', law);
  mongoClient.close();
});
