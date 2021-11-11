const mongo = require('../mongo/mongoClient');
const fs = require('fs').promises;
const path = require('path');
const studentQueries = require('../mongo/studentQueries');
const userQueries = require('../mongo/userQueries');
const postQueries = require('../mongo/postQueries');
const commentQueries = require('../mongo/commentQueries');
//Get data
const studentJSONData = getStudentJSONData();
const postJSONData = getJSONData('./postData.json');
const userJSONData = getJSONData('./userData.json');
const commentJSONData = getJSONData('./commentData.json');

/**
 * Fill db with excersize data
 * Data is stored in JSON files, extracted and manipulated, inserted into db
 */
const run = async () => {
  try {
    //Init mongodb
    console.log('Initializing mongo');
    await mongo.init();
    //Clear db
    console.log('Clearing db');
    await mongo.clear();
    //Fill DB
    console.log('Adding students');
    await studentQueries.insertMany(await studentJSONData);

    console.log('Adding Users');
    await userQueries.insertMany(await userJSONData);

    console.log('Adding Posts');
    await postQueries.insertMany(await postJSONData);

    console.log('Attaching comments to Posts');
    const attachedComments = await attachCommentToPost(await commentJSONData);
    console.log('Adding comments');
    await commentQueries.insertMany(attachedComments);
    //Done - close mongo
    await console.log('Closing mongo');
    mongo.close();
  } catch (error) {
    mongo.close();
    console.log(error);
  }
};
run();

async function getStudentJSONData() {
  const rawdata = await fs.readFile(path.join(__dirname, './studentData.json'));
  return JSON.parse(rawdata).map((student) => {
    //Convert date
    const dateParts = student.birth.split('/');
    student.birth = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return student;
  });
}

async function getJSONData(filename) {
  return await JSON.parse(await fs.readFile(path.join(__dirname, filename)));
}

async function attachCommentToPost(commentData) {
  return await Promise.all(
    commentData.map(async (comment) => {
      comment.post = await postQueries.getPostIdByTitle(comment.post);
      return comment;
    })
  );
}
