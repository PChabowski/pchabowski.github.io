import person from "./modules/person.js";
import scrollFunction, { goTop } from "./modules/scrollFunction.js";
import onePage from "./modules/onePage.js";
import openMenu from "./modules/openMenu.js";

let name = person.name;
document.getElementById("demo").innerHTML = name;

const header = ['strona-glowna', 'o-mnie', 'projekty', 'kontakt'];

window.onscroll = function() {scrollFunction()};
window.onload = function() {
	const btnGoTop = document.getElementById("goTop");
	const btnOpenMenu = document.getElementById("open-menu");
	const topnav = document.getElementById("Topnav");
	const linkMenu = topnav.document.getElementByTagName("a");
	btnGoTop.onclick = goTop;
	btnOpenMenu.onclick = openMenu;
	for(let i=0; header.length; i++) {
		linkMenu[i].onclick = onePage(header[i], this);
	}
};