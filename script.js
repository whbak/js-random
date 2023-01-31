function getWeb() {
const requestUrl = "https://randomuser.me/api/?results=6";
const divDoos = document.querySelector('.persons');

fetch(requestUrl)
    .then(res => res.json())
    .then(res => {
        for (let i = 0; i < res.results.length; i++) {
            /* create div for all */
            let divAdd = document.createElement('div');
            divAdd.className = 'blok';
            /* create Elements */
            let H3 = document.createElement('h3');
            let Img = document.createElement('img');
            let ImgFlag = document.createElement('img');
            ImgFlag.className = 'flag';
            let pMail = document.createElement('p');
            let pCountry = document.createElement('p');
            /* add values */
            H3.innerHTML = `${res.results[i].name.first} ${res.results[i].name.last}`;
            Img.setAttribute('src', res.results[i].picture.large);
            Img.setAttribute('alt', 'plaatje');
            /* input randomuser ountry in restcountries */
            let flag = `restcountries.com/v3.1/alpha/${res.results[i].nat}`;
            fetch(`https://${flag}`)
            .then(res => res.json())
            .then(data => {
                ImgFlag.setAttribute('src', data[0].flags.png);
            });
            ImgFlag.setAttribute('alt', 'plaatje');
            pMail.innerHTML = res.results[i].email;
            pCountry.innerHTML = res.results[i].location.country;
            /* append Elements */
            divAdd.appendChild(H3);
            divAdd.appendChild(Img);
            divAdd.appendChild(ImgFlag);
            divAdd.appendChild(pMail);
            divAdd.appendChild(pCountry);
            divDoos.appendChild(divAdd);
        }
    });
}

getWeb();
