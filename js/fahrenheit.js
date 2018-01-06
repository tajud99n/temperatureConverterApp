define(["./sandbox"], function (sb) {

    var id, parent, _fahrenheit, convert;

    id = "converterF";

    function init() {
        parent = document.getElementById("converter");
        _fahrenheit = parent.getElementsByClassName("fahrenheit")[0];
        convert = parent.getElementsByClassName("submit")[1];

        sb.listen({ "toFahrenheit": displayFahrenheit }, id);

        $on(convert, "click", convertToCelsius)
    }

    function displayFahrenheit(toFahrenheit) {
        _fahrenheit.value = celsiusValue;
    }

     function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * (5 / 9))
    }

    function convertToCelsius(e) {

        var temperature;

        temperature = _fahrenheit.value;


        fahrenheitValue = toCelsius(temperature);

        sb.notify({
            type: "toCelsius",
            data: fahrenheitValue
        });

        e.preventDefault();
    } 

    return {
        id: id,
        init: init,
        convertToCelsius: convertToCelsius
    }
})
