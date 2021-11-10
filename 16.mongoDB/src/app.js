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

const waitForMongoAndListen = async () => {
  //Init mongo
  await mongo.init();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

waitForMongoAndListen();
