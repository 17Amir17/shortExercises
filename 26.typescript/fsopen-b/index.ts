import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { getNumber, calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNumbers(arr: any): number[] {
  if (typeof arr != 'object' || !arr) throw 'bad param';
  const numbers: number[] = [];
  for (const n of arr) {
    numbers.push(getNumber(n));
  }
  return numbers;
}

app.post('/exercise', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = req.body;
    if (!daily_exercises || !target) throw 'parameter missing';

    const exHoursNumber: number[] = getNumbers(daily_exercises);
    const originalTargetValueNumber: number = getNumber(target);
    res.json(calculateExercises(exHoursNumber, originalTargetValueNumber));
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res.json({ error });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
