require('dotenv').config();
const mongoose = require('mongoose');
const Agent = require('./models/Agent');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.usl1e.mongodb.net/AgentsExcersize?retryWrites=true&w=majority`;

async function init() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('connected to database successfully');
        resolve();
      })
      .catch(() => {
        console.log('connection to database failed');
        reject();
      });
  });
}

async function addAgent(name, city, id) {
  const agent = new Agent({ name, city, id });
  const res = await agent.save();
  return res;
}

async function insertMany(col) {
  return await Agent.insertMany(col);
}

async function clear() {
  return await Agent.deleteMany({});
}

async function close() {
  await mongoose.connection.close();
}

async function getAllCities() {
  const cities = await Agent.find({}).distinct('city');
  return cities.map((city) => {
    return city.trim();
  });
}

async function getAgentsInCity(city) {
  const agents = await Agent.find({ city });
  return agents.map((agent) => {
    return {
      name: agent.name,
      id: agent.id,
    };
  });
}

async function editAgentCityByID(id, city) {
  const res = await Agent.findOneAndUpdate({ id }, { city });
  console.log(res);
  return res;
}
module.exports = {
  init,
  addAgent,
  insertMany,
  clear,
  close,
  getAllCities,
  getAgentsInCity,
  editAgentCityByID,
};
