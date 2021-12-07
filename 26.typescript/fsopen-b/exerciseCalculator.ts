interface ExerciseData {
  numOfDays: number;
  numOfTrainingDays: number;
  originalTargetValue: number;
  avgTime: number;
  isReached: boolean;
  raiting: 1 | 2 | 3;
  textRaiting: string;
}

function calculateExercises(
  exHours: number[],
  originalTargetValue: number
): ExerciseData {
  // Collect data
  const textRaitings = ['Bad', 'Ok', 'Good'];
  const numOfDays = exHours.length;
  let numOfTrainingDays = 0,
    avgTime = 0;
  exHours.forEach((hour) => {
    if (hour > 0) numOfTrainingDays++;
    avgTime += hour;
  });
  avgTime /= numOfDays;
  // Compute results
  const raiting =
    avgTime > originalTargetValue ? 3 : avgTime === originalTargetValue ? 2 : 1;
  const textRaiting = textRaitings[raiting - 1];
  const isReached = raiting > 1;
  return {
    numOfDays,
    numOfTrainingDays,
    originalTargetValue,
    avgTime,
    isReached,
    raiting,
    textRaiting,
  };
}

interface ExerciseValues {
  exHours: number[];
  originalTargetValue: number;
}

export function getNumber(str: unknown): number {
  const num = Number(str);
  if (isNaN(num)) throw 'Not a number!!';
  return num;
}

const parseArgs = (args: Array<string>): ExerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  try {
    const exHours: number[] = [];
    for (let i = 2; i < args.length - 1; i++) {
      exHours.push(getNumber(args[i]));
    }
    const originalTargetValue = getNumber(args[args.length - 1]);
    return {
      exHours,
      originalTargetValue,
    };
  } catch (error) {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { exHours, originalTargetValue } = parseArgs(process.argv);
  console.log(calculateExercises(exHours, originalTargetValue));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
