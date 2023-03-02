function calculateBMI() {
    let heightInputFeet = document.getElementById("heightInputFeet").value;
    let heightInputInch = document.querySelector("#heightInputInch").value;

    let weightInputKg = document.getElementById("weightInputKg").value;

    heightInputFeet = parseInt(heightInputFeet);
    heightInputInch = parseInt(heightInputInch);

    heightInputInch += heightInputFeet * 12;

    let heightInputMeter = heightInputInch * 2.54 / 100;

    let heightInputMeterSq = heightInputMeter ** 2;

    let bodyMassIndex = weightInputKg / heightInputMeterSq;

    let idealWeight = 22 * heightInputMeterSq;

    let weightToLoss = (weightInputKg - idealWeight).toFixed(2);

    let weightToGain = (idealWeight - weightInputKg).toFixed(2);

    let suggestion = "you are ";

    if (bodyMassIndex >= 30) {
        suggestion += `Obese. you need to loss ${weightToLoss}kg`;

    } else if (bodyMassIndex >=25) {
        suggestion += `Overweight. you need to loss ${weightToLoss}kg`;

    } else if (bodyMassIndex >= 18.5) {

        if (bodyMassIndex > 22) {
            suggestion += `Normal but optionally you may loss ${weightToLoss} to become ideally fit`;

        } else if (parseInt(bodyMassIndex) === 22) {
            suggestion += `Perfectly Fit`;

        } else {
            suggestion += `Normal but optionally you are suppposed to gain ${weightToGain} to become ideally fit`;
        }

    } else {
        suggestion += `Underweight. you are supposed to gain ${weightToGain}kg to become normal`;
    }


    console.log("your BMI index: " ,bodyMassIndex);

    console.log("your idealWeight:" , idealWeight);

    console.log("your suggestion:" , suggestion);


    document.querySelector("#title").innerHTML = `Your Ideal weight: ${(idealWeight).toFixed(2)}kg`

    document.querySelector("#suggestion").innerHTML = suggestion;



}
