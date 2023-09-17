import person from "./modules/person.js";
import scrollFunction, { goTop } from "./modules/scrollFunction.js";
import onePage from "./modules/onePage.js";
import openMenu from "./modules/openMenu.js";

let name = person.name;
document.getElementById("demo").innerHTML = name;

window.onscroll = function() {scrollFunction()};
window.onload = function() {
	const btnGoTop = document.getElementById("goTop");
	const btnOpenMenu = document.getElementById("open-menu");
	btnGoTop.onclick = goTop;
	btnOpenMenu.onclick = openMenu;
};