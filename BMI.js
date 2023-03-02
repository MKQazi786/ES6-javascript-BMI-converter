function calculateBMI(){
    let heightInputFeet = document.getElementById("heightInputFeet").value;
    let heightInputInch = document.querySelector("#heightInputInch").value;

    let weightInputKg = document.getElementById("weightInputKg").value;

    heightInputFeet = parseInt(heightInputFeet);
    heightInputInch = parseInt(heightInputInch);

    heightInputInch += heightInputFeet * 12;

    let heightInputMeter = heightInputInch * 2.54 / 100; 

    let heightInputMeterSq = heightInputMeter**2;

    let bodyMassIndex = weightInputKg/heightInputMeterSq;
    
    
}