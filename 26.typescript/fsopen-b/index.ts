import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { getNumber } from './exerciseCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  console.log(req.query);

  try {
    // Validate
    const convertedHeight = getNumber(height);
    const convertedWeight = getNumber(weight);

    res.json({
      height,
      weight,
      bmi: calculateBmi(convertedHeight, convertedWeight),
    });
  } catch (err) {
    res.json({ error: 'malformatted parameters' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
