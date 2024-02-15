// start hanya input angka
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// end hanya input angka


// start button konversi, reset dan reverse
function konversiBtn() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = document.getElementById("fahrenheit");

    if (celsiusInput === "") {
        alert("Silahkan Input terlebih dahulu !!!");
        return;
    }

    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9 / 5) + 32;

    fahrenheitOutput.value = fahrenheit.toFixed(2);
}

function resetBtn() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    hideElement("formula");
    hideElement("result");
}

function reverseBtn() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    var tempCelsius = celsiusInput.value;
    var tempFahrenheit = fahrenheitInput.value;

    if (tempCelsius !== "") {
        celsiusInput.value = tempFahrenheit;
        fahrenheitInput.value = tempCelsius;
    } else {
        alert("Silakan isi nilai dalam input Celsius terlebih dahulu.");
    }
}

function showFormula() {
    showElement("formula");
    hideElement("result");
}

function showResult() {
    var fahrenheitValue = document.getElementById("fahrenheit").value;
    var resultValue = document.getElementById("resultValue");

    resultValue.textContent = fahrenheitValue;
    showElement("result");
    hideElement("formula");
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}
// end button konversi, reset dan reverse