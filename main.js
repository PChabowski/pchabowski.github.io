import person from "./modules/person.js";
import { initSFunAndGoTop } from "./modules/scrollFunction.js";
import { initOpenMenu } from "./modules/openMenu.js";
import { initOnePage } from "./modules/onePage.js";

fetch('date/person.json')
    .then(response => response.json())
    .then(data => {
        const persons = data.person;
        const personIdToFind = 1;

        const foundPerson = persons.find(person => person.id === personIdToFind);

        if (foundPerson) {
            const personConteiner = document.querySelector('.header');
            personConteiner.innerHTML = `<h1>${foundPerson.name} ${foundPerson.surname}</h1><p>${foundPerson.profession}</p>`;

        } else {
            console.log('Nie znaleziono takiej osoby');
        }
    });

window.onload = function () {
	document.getElementById("demo").innerHTML = person.name;
	initSFunAndGoTop();
	initOpenMenu();
	initOnePage();
};