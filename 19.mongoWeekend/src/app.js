const express = require('express');
const cors = require('cors');
const mongo = require('./mongo/mongoClient');

//Server setup
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/cities', async (req, res) => {
  res.json(await mongo.getAllCities());
});

app.get('/agents/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'Bad input' });
  res.json(await mongo.getAgentsInCity(city));
});

app.put('/agent/:id/edit', async (req, res) => {
  const id = req.params.id;
  const city = req.body.city;
  if (!id || !city) return res.status(400).json({ error: 'Bad input' });
  const success = await mongo.editAgentCityByID(id, city);
  if (!success)
    return res.status(404).json({ error: `User with id  ${id} was not found` });
  res.json({ message: `City updated` });
});

const waitForMongoAndListen = async () => {
  //Init mongo
  await mongo.init();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

waitForMongoAndListen();
