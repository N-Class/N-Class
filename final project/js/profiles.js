var json = require('./profiledata.json');
jest.dontMock('./profiledata.json');

fetch(json)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const profiles = jsonObject['profiles'];


        for (let i = 0; i < profiles.length; i++) { {

                let profile = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');
                let image = document.createElement('img');

                h2.textContent = profiles[i].name + ' ';
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

                profile.appendChild(h2);
                profile.appendChild(h3);
                profile.appendChild(div1);
                profile.appendChild(div2);
                profile.appendChild(div3);
                profile.appendChild(image);

                document.querySelector('div.profiles').appendChild(profile);
            }

        }
    });