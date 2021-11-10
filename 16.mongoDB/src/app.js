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

const waitForMongo = async () => {
  //Init mongo
  await mongo.init();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

waitForMongo();
