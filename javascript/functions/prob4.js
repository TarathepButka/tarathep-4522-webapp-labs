function formatConversion(temp, convert, type) {
    let cel = "°C";
    let fah = "°F";
    if (type == "C") {
        return temp + cel + " is " + celsiusToFahrenheit(temp).toFixed(2) + fah;
    } else if (type == "F") {
        return temp + fah + " is " + FahrenheitToCelsius(temp).toFixed(2) + cel;
    } else return "error";
}



let celsiusToFahrenheit = (C) => (C * 9 / 5) + 32;
let FahrenheitToCelsius = (F) => (F - 32) * 5 / 9;

console.log(formatConversion(20, celsiusToFahrenheit, "C"));
console.log(formatConversion(98.6, FahrenheitToCelsius, "F"));
console.log(formatConversion(0, celsiusToFahrenheit, "C"));
console.log(formatConversion(32, FahrenheitToCelsius, "F"));