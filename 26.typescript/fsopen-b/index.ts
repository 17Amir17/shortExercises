import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { getNumber } from './exerciseCalculator';
import { calculator, Operation } from './caclulator';
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

interface CalculateInput {
  value1: number;
  value2: number;
  op: string;
}

function getOperation(str: string): Operation {
  if (['add', 'multiply', 'divide'].find((op) => op === str) === undefined)
    throw 'not operation';
  return str as Operation;
}

function isCalcInput(body: object): body is CalculateInput {
  return 'value1' in body && 'value2' in body && 'op' in body;
}

function validateCalculateBody(body: object): CalculateInput {
  if (isCalcInput(body)) {
    const value1 = getNumber(body.value1);
    const value2 = getNumber(body.value2);
    const op = getOperation(body.op);
    return { value1, value2, op };
  }
  throw 'Invalid body';
}

app.post('/calculate', (req, res) => {
  const { value1, value2, op }: CalculateInput = validateCalculateBody(
    req.body as object
  );

  const result = calculator(value1, value2, op as Operation);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
