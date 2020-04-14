const requestURL = '../js/profiledata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const profiles = jsonObject['profiles'];


        for (let i = 0; i < profiles.length; i++) {

            
            if (profiles[i].name == "Tom Tom" ||
                profiles[i].name == "Susan Stone" ||
                profiles[i].name == "Aki Lee") {

                let profile = document.createElement('section');
                let h2 = document.createElement('h2');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');
                let div4 = document.createElement('div');
                let image = document.createElement('img');

                h2.textContent = profiles[i].name + ' ';
                div1.textContent = 'Certification: ' + profiles[i].certification;
                div2.textContent = 'Experience: ' + profiles[i].experience;
                div3.textContent = 'Email: ' + profiles[i].email;
                div4.textContent = 'Biography: ' + profiles[i].bio;
                if (profiles[i].name == "Tom Tom") {
                    image.setAttribute('src', 'images/' + profiles[i].photo);
                } else if (profiles[i].name == "Susan Stone") {
                    image.setAttribute('src', 'images/' + profiles[i].photo);
                } else if (profiles[i].name == "Aki Lee") {
                    image.setAttribute('src', 'images/' + profiles[i].photo);
                }
                image.setAttribute('alt', profiles[i].name + ' ')

                profile.appendChild(image);
                profile.appendChild(h2);
                profile.appendChild(div1);
                profile.appendChild(div2);
                profile.appendChild(div3);
                profile.appendChild(div4);

                document.querySelector('div.profiles').appendChild(profile);
            }

        }
    });