function getBMI(weight, height) {
    return (weight / (height * height)) * 10000;
  }
function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if(isNaN(weight) || isNaN(height)){
        document.getElementById('result').innerText = 'Enter valid details';
        return;
    }
    const ans = getBMI(weight, height);
    document.getElementById('result').innerText = "BMI: " + ans.toFixed(5);
    if(ans < 18.5){
        document.getElementById('answer').innerText = "Condition: " + 'Underweight';
    }
    else if(ans >= 18.5 && ans <= 24.9){
        document.getElementById('answer').innerText = "Condition: " + 'Healthy';
    }
    else if(ans >= 25 && ans <= 29.9){
        document.getElementById('answer').innerText = "Condition: " + 'Overweight';
    }
    else{
        document.getElementById('answer').innerText = "Condition: " + 'Obese';
    }

}