const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];


        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" ||
                towns[i].name == "Preston" ||
                towns[i].name == "Soda Springs") {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');
                let image = document.createElement('img');

                h2.textContent = towns[i].name + ' ';
                h3.textContent = towns[i].motto + ' ';
                div1.textContent = 'Founded: ' + towns[i].yearFounded;
                div2.textContent = 'Population: ' + towns[i].currentPopulation;
                div3.textContent = 'Avg. Rainfall: ' + towns[i].averageRainfall;
                if (towns[i].name == "Fish Haven") {
                    image.setAttribute('src', 'images/' + towns[i].photo);
                } else if (towns[i].name == "Preston") {
                    image.setAttribute('src', 'images/' + towns[i].photo);
                } else if (towns[i].name == "Soda Springs") {
                    image.setAttribute('src', 'images/' + towns[i].photo);
                }
                image.setAttribute('alt', towns[i].name + ' ')

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(div1);
                card.appendChild(div2);
                card.appendChild(div3);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }

        }
    });