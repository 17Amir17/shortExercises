interface ExerciseData{
    numOfDays: number;
    numOfTrainingDays: number;
    originalTargetValue: number;
    avgTime: number;
    isReached: boolean;
    raiting: 1 | 2 | 3;
    textRaiting: string;
}

function calculateExercises(exHours: number[], originalTargetValue: number) : ExerciseData{
    // Collect data
    const textRaitings = ['Bad', 'Ok', 'Good'];
    const numOfDays = exHours.length;
    let numOfTrainingDays = 0, avgTime = 0;
    exHours.forEach(hour => {if(hour > 0) numOfTrainingDays++; avgTime += hour});
    avgTime /= numOfDays;
    // Compute results
    const raiting = avgTime > originalTargetValue ? 3 : avgTime === originalTargetValue ? 2 : 1;
    const textRaiting = textRaitings[raiting-1];
    const isReached = raiting > 1;
    return {numOfDays, numOfTrainingDays, originalTargetValue, avgTime, isReached, raiting, textRaiting}
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))