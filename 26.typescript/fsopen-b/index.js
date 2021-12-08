"use strict";
exports.__esModule = true;
var express_1 = require("express");
var bmiCalculator_1 = require("./bmiCalculator");
var exerciseCalculator_1 = require("./exerciseCalculator");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get('/hello', function (_req, res) {
    res.send('Hello Full Stack');
});
app.get('/bmi', function (req, res) {
    var _a = req.query, height = _a.height, weight = _a.weight;
    console.log(req.query);
    try {
        // Validate
        var convertedHeight = (0, exerciseCalculator_1.getNumber)(height);
        var convertedWeight = (0, exerciseCalculator_1.getNumber)(weight);
        res.json({
            height: height,
            weight: weight,
            bmi: (0, bmiCalculator_1.calculateBmi)(convertedHeight, convertedWeight)
        });
    }
    catch (err) {
        res.json({ error: 'malformatted parameters' });
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNumbers(arr) {
    if (typeof arr != 'object' || !arr)
        throw 'bad param';
    var numbers = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        numbers.push((0, exerciseCalculator_1.getNumber)(n));
    }
    return numbers;
}
app.post('/exercise', function (req, res) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        var _a = req.body, daily_exercises = _a.daily_exercises, target = _a.target;
        if (!daily_exercises || !target)
            throw 'parameter missing';
        var exHoursNumber = getNumbers(daily_exercises);
        var originalTargetValueNumber = (0, exerciseCalculator_1.getNumber)(target);
        res.json((0, exerciseCalculator_1.calculateExercises)(exHoursNumber, originalTargetValueNumber));
    }
    catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        res.json({ error: error });
    }
});
var PORT = 3003;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
