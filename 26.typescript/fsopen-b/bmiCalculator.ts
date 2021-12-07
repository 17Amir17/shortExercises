export function calculateBmi(height: number, weight: number) : string {
    const bmi = weight / ((height / 100)**2);
    if(bmi < 18.5){
        return `Underweight (${bmi})`
    }else if (bmi < 25){
        return `Normal (${bmi})`
    }else{
        return `Overweight (${bmi})`
    }
}

interface BmiValues{
    height: number;
    weight: number;
}

const parseArguments = (args: Array<string>): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        height: Number(args[2]),
        weight: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }

try {
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
