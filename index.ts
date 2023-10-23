import { series } from "./data.js";
import Serie from "./serieEntity.js";


function createSeries(series: Array<Serie>): void {
    const list = document.getElementById("series_info");
    if (!list) {
        throw new Error("List not found");
    }

    let seasonAverage: number = 0;
    
    series.forEach((serie) => {
        const row = document.createElement("tr");
        const aLink: HTMLElement = document.createElement("a");
        aLink.setAttribute("href", serie.url);
        aLink.appendChild(document.createTextNode(serie.name));

        row.insertCell().appendChild(aLink);
        row.insertCell().appendChild(document.createTextNode(serie.channel));
        row.insertCell().appendChild(document.createTextNode(serie.seasons.toString()));
        list.appendChild(row);

        seasonAverage += serie.seasons;
    });

    seasonAverage /= series.length;

    const seasonAvg: HTMLElement = document.getElementById("season_average")!;
    seasonAvg.appendChild(document.createTextNode(seasonAverage.toString()));
}


window.addEventListener("load", () => {
    console.log("Page loaded");
    createSeries(series);
});
    