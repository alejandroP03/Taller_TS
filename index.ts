import { series } from './data.js';
import Serie from './serieEntity.js';

function createSeries(series: Array<Serie>): void {
	const list = document.getElementById('series_info');
	if (!list) {
		throw new Error('List not found');
	}

	let seasonAverage: number = 0;

	series.forEach(serie => {
		const row = document.createElement('tr');
		const aLink: HTMLElement = document.createElement('a');
		aLink.setAttribute('href', serie.url);
		aLink.appendChild(document.createTextNode(serie.name));

		row.insertCell().appendChild(aLink);
		row.insertCell().appendChild(document.createTextNode(serie.channel));
		row.insertCell().appendChild(
			document.createTextNode(serie.seasons.toString())
		);

		row.addEventListener('click', () => createCard(serie));

		list.appendChild(row);

		seasonAverage += serie.seasons;
	});

	seasonAverage /= series.length;

	const seasonAvg: HTMLElement = document.getElementById('season_average')!;
	seasonAvg.appendChild(document.createTextNode(seasonAverage.toString()));
}

function createCard(serie: Serie) {
    const card = document.getElementById('card')!;
	const cardTitle = document.getElementById('card-title')!;
	const cardImage = document.getElementById('card-img')!;
	const cardDescription = document.getElementById('card-description')!;
	const cardLink = document.getElementById('card-link')!;
    
	card.setAttribute("src", "serie.image");
    
	cardTitle.innerText = serie.name;
	cardImage.setAttribute('src', serie.image);
	cardDescription.innerText = serie.description;
	cardLink.setAttribute('href', serie.url);
	cardLink.innerText = serie.url;

	cardImage.onload = () => {
		card.classList.remove('visually-hidden');
	};
	
}

window.addEventListener('load', () => {
	console.log('Page loaded');
	createSeries(series);
});
