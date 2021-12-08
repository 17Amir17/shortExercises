"use strict";
exports.__esModule = true;
exports.calculateBmi = void 0;
function calculateBmi(height, weight) {
    var bmi = weight / Math.pow((height / 100), 2);
    if (bmi < 18.5) {
        return "Underweight (".concat(bmi, ")");
    }
    else if (bmi < 25) {
        return "Normal (".concat(bmi, ")");
    }
    else {
        return "Overweight (".concat(bmi, ")");
    }
}
exports.calculateBmi = calculateBmi;
var parseArguments = function (args) {
    if (args.length < 4)
        throw new Error('Not enough arguments');
    if (args.length > 4)
        throw new Error('Too many arguments');
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    }
    else {
        throw new Error('Provided values were not numbers!');
    }
};
try {
    var _a = parseArguments(process.argv), height = _a.height, weight = _a.weight;
    console.log(calculateBmi(height, weight));
}
catch (error) {
    var errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
