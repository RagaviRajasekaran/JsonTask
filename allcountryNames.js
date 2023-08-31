let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);

    let countriesname  = [];
    let countriesregion  = [];
    let countriessubregion  = [];
    let countriespopulation  = [];

    for (let countrys of country) {
        countriesname .push(countrys['name']);
        countriesregion .push(countrys['region']);
        countriessubregion .push(countrys['subregion']);
        countriespopulation .push(countrys['population']);
    }

    console.log(countriesname );
    console.log(countriesregion );
    console.log(countriessubregion);
    console.log(countriespopulation );
};


xhr.send();