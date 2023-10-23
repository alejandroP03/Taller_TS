import { series } from './data.js';
function createSeries(series) {
    var list = document.getElementById('series_info');
    if (!list) {
        throw new Error('List not found');
    }
    var seasonAverage = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        var aLink = document.createElement('a');
        aLink.setAttribute('href', serie.url);
        aLink.appendChild(document.createTextNode(serie.name));
        row.insertCell().appendChild(aLink);
        row.insertCell().appendChild(document.createTextNode(serie.channel));
        row.insertCell().appendChild(document.createTextNode(serie.seasons.toString()));
        row.addEventListener('click', function () { return createCard(serie); });
        list.appendChild(row);
        seasonAverage += serie.seasons;
    });
    seasonAverage /= series.length;
    var seasonAvg = document.getElementById('season_average');
    seasonAvg.appendChild(document.createTextNode(seasonAverage.toString()));
}
function createCard(serie) {
    var card = document.getElementById('card');
    var cardTitle = document.getElementById('card-title');
    var cardImage = document.getElementById('card-img');
    var cardDescription = document.getElementById('card-description');
    var cardLink = document.getElementById('card-link');
    card.setAttribute("src", "serie.image");
    cardTitle.innerText = serie.name;
    cardImage.setAttribute('src', serie.image);
    cardDescription.innerText = serie.description;
    cardLink.setAttribute('href', serie.url);
    cardLink.innerText = serie.url;
    cardImage.onload = function () {
        card.classList.remove('visually-hidden');
    };
}
window.addEventListener('load', function () {
    console.log('Page loaded');
    createSeries(series);
});
