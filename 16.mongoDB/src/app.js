const express = require('express');
const cors = require('cors');
const mongo = require('./mongo/mongoClient');

//Server setup
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
//Init mongo
mongo.init();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
