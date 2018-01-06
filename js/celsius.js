define(["./sandbox"], function (sb) {

    var id, parent, _celsius, convert;

    id = "converterC";

    function init() {
        parent = document.getElementById("converter");
        _celsius = parent.getElementsByClassName("celsius")[0];
        convert = parent.getElementsByClassName("submit")[0];

        $on(convert, "click", convertToFahrenheit);

        sb.listen({ "toCelsius": displayCelsius }, id)
    }

    function displayCelsius(toCelsius) {
        _celsius.value = fahrenheitValue;
    } 

    function toFahrenheit(celsius) {
        return ((celsius * 9 / 5) + (32));
    }

    function convertToFahrenheit(e) {
        var temperature;

        temperature = _celsius.value;



        celsiusValue = toFahrenheit(temperature);



        sb.notify({
            type: "toFahrenheit",
            data: celsiusValue
        })

        e.preventDefault();
    }

    return {
        id: id,
        init: init,
        convertToFahrenheit: convertToFahrenheit
    }

})