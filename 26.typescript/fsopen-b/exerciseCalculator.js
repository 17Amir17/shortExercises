"use strict";
exports.__esModule = true;
exports.getNumber = exports.calculateExercises = void 0;
function calculateExercises(exHours, originalTargetValue) {
    // Collect data
    var textRaitings = ['Bad', 'Ok', 'Good'];
    var numOfDays = exHours.length;
    var numOfTrainingDays = 0, avgTime = 0;
    exHours.forEach(function (hour) {
        if (hour > 0)
            numOfTrainingDays++;
        avgTime += hour;
    });
    avgTime /= numOfDays;
    // Compute results
    var raiting = avgTime > originalTargetValue ? 3 : avgTime === originalTargetValue ? 2 : 1;
    var textRaiting = textRaitings[raiting - 1];
    var isReached = raiting > 1;
    return {
        numOfDays: numOfDays,
        numOfTrainingDays: numOfTrainingDays,
        originalTargetValue: originalTargetValue,
        avgTime: avgTime,
        isReached: isReached,
        raiting: raiting,
        textRaiting: textRaiting
    };
}
exports.calculateExercises = calculateExercises;
function getNumber(str) {
    var num = Number(str);
    if (isNaN(num))
        throw 'Not a number!!';
    return num;
}
exports.getNumber = getNumber;
var parseArgs = function (args) {
    if (args.length < 4)
        throw new Error('Not enough arguments');
    try {
        var exHours = [];
        for (var i = 2; i < args.length - 1; i++) {
            exHours.push(getNumber(args[i]));
        }
        var originalTargetValue = getNumber(args[args.length - 1]);
        return {
            exHours: exHours,
            originalTargetValue: originalTargetValue
        };
    }
    catch (error) {
        throw new Error('Provided values were not numbers!');
    }
};
try {
    var _a = parseArgs(process.argv), exHours = _a.exHours, originalTargetValue = _a.originalTargetValue;
    console.log(calculateExercises(exHours, originalTargetValue));
}
catch (error) {
    var errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
