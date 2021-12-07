function calculateBmi(height: number, weight: number) : string {
    const bmi = weight / ((height / 100)**2);
    if(bmi < 18.5){
        return `Underweight (${bmi})`
    }else if (bmi < 25){
        return `Normal (${bmi})`
    }else{
        return `Overweight (${bmi})`
    }
}

console.log(calculateBmi(180, 74))
