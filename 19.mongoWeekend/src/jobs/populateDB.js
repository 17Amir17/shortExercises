const mongo = require('../mongo/mongoClient');
const fs = require('fs').promises;
const path = require('path');

//Get data
const jsonData = getJSONData();
//Init mongodb
mongo
  .init()
  .then(async () => {
    //Clear db
    await mongo.clear().then(
      () => {
        console.log('Cleared DB');
      },
      (err) => {
        throw err;
      }
    );
    //Fill db
    await mongo.insertMany(await jsonData).then(
      () => {
        console.log('Filled db');
        //Close db
        mongo.close().then(() => {
          console.log('Mongo closed');
        });
      },
      (err) => {
        throw err;
      }
    );
  })
  .catch((err) => {
    //If any error occurs close db
    mongo.close();
    throw err;
  });

async function getJSONData() {
  const rawdata = await fs.readFile(path.join(__dirname, './studentData.json'));
  return JSON.parse(rawdata).map((student) => {
    //Convert date
    const dateParts = student.birth.split('/');
    student.birth = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return student;
  });
}
