const mongo = require('../mongo/mongoClient');
const csv = require('csvtojson');
const path = require('path');

//Get csv path
const csvFilePath = path.join(__dirname, './agents.csv');
//Start getting json
const jsonData = getJSON();
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

async function getJSON() {
  //Convert csv
  return csv()
    .fromFile(csvFilePath)
    .then((agents) => {
      const formattedAgents = agents
        .map((agent) => {
          //Format entries
          [idKey, nameKey, cityKey] = Object.keys(agent);
          return {
            name: agent[nameKey],
            city: agent[cityKey],
            id: agent[idKey],
          };
        })
        .filter((agent) => {
          //Filter out bad entries
          return agent.name && agent.city && agent.id;
        });
      console.log('Converted and formatted csv');
      return formattedAgents;
    });
}
