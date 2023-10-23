import { series } from "./data.js";
function createSeries(series) {
    var list = document.getElementById("series_info");
    if (!list) {
        throw new Error("List not found");
    }
    var seasonAverage = 0;
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        var aLink = document.createElement("a");
        aLink.setAttribute("href", serie.url);
        aLink.appendChild(document.createTextNode(serie.name));
        row.insertCell().appendChild(aLink);
        row.insertCell().appendChild(document.createTextNode(serie.channel));
        row.insertCell().appendChild(document.createTextNode(serie.seasons.toString()));
        list.appendChild(row);
        seasonAverage += serie.seasons;
    });
    seasonAverage /= series.length;
    var seasonAvg = document.getElementById("season_average");
    seasonAvg.appendChild(document.createTextNode(seasonAverage.toString()));
}
window.addEventListener("load", function () {
    console.log("Page loaded");
    createSeries(series);
});
