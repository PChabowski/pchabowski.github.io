import person from "./modules/person.js";
import scrollFunction, { goTop } from "./modules/scrollFunction.js";
import openMenu from "./modules/openMenu.js";

const name = person.name;
document.getElementById("demo").innerHTML = name;

function onePage(pageName,elmnt) {
	const tabcontent = document.getElementsByClassName("article");
	const btn = document.getElementsByClassName("button");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = "article";
		btn[i].className = "button";
	}
    document.getElementById(pageName).className += " show";
	elmnt.className += " active";
}

window.onscroll = function() {scrollFunction()};
window.onload = function() {
	const btnGoTop = document.getElementById("goTop");
	btnGoTop.onclick = goTop;
	
	const btnOpenMenu = document.getElementById("open-menu");
	btnOpenMenu.onclick = openMenu;
};