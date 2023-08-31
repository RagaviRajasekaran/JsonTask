let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);

    let countries  = [];

    for (let countrys of country) {
        countries .push(countrys['flags']);
    }

    console.log(countries );
};


xhr.send();