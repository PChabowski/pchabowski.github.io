import person from "./modules/person.js";
import scrollFunction, { goTop } from "./modules/scrollFunction.js";
let name = person.name;
document.getElementById("demo").innerHTML = name;

window.onscroll = function() {scrollFunction()};
window.onload = function() {
	const btnGoTop = document.getElementById("goTop");
	btnGoTop.onclick = goTop;
};