var soap = require("soap");
var path = require("path");
var _ = require("underscore");

exports.celToFa = (rrr) => new Promise((resolve, reject) => {
    return soap.createClientAsync("https://www.w3schools.com/xml/tempconvert.asmx?wsdl", { endpoint: "https://www.w3schools.com/xml/tempconvert.asmx" }).then((client) => {

        const args = {
            _xml: `<x:CelsiusToFahrenheit xmlns:x="https://www.w3schools.com/xml/">
                <x:Celsius>${rrr}</x:Celsius>
            </x:CelsiusToFahrenheit>`
        };

        console.log(client);
        return client.CelsiusToFahrenheitAsync(args).catch((err) => {
            console.log(err);
            return reject(err);
        })
    }).then((result) => {
        if (result) {
            console.log(result[0]);
            return resolve(result[0]);
        }
    }).catch((e) => {
        throw e;
    });
})





