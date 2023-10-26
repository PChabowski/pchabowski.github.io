import person from "./modules/person.js";
import { initSFunAndGoTop } from "./modules/scrollFunction.js";
import { initOpenMenu } from "./modules/openMenu.js";
import { initOnePage } from "./modules/onePage.js";

window.onload = function () {
	document.getElementById("demo").innerHTML = person.name;
	initSFunAndGoTop();
	initOpenMenu();
	initOnePage();
};