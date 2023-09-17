import person from "./modules/person.js";
import scrollFunction, { goTop } from "./modules/scrollFunction.js";
import onePage from "./modules/onePage.js";
import openMenu from "./modules/openMenu.js";

let name = person.name;
document.getElementById("demo").innerHTML = name;


window.onscroll = function() {scrollFunction()};
window.onload = function() {
	const btnGoTop = document.getElementById("goTop");
	btnGoTop.onclick = goTop;
	
	const btnOpenMenu = document.getElementById("open-menu");
	btnOpenMenu.onclick = openMenu;
	
	const title = ['strona-glowna', 'o-mnie', 'projekty', 'kontakt'];
	const topnav = document.getElementById("Topnav");
	const linkMenu = topnav.getElementsByTagName("a");
	for(let i=0; linkMenu.length; i++) {
		linkMenu[i].onclick = onePage(title[i], this);
	}
};