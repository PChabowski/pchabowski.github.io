import person from "./modules/person.js";
import scrollFunction from "./modules/scrollFunction.js";
let name = person.name;
document.getElementById("demo").innerHTML = name;

function goTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


window.onscroll = function() {scrollFunction()};
window.ononload = function() {
	const btnGoTop = document.getElementById("goTop");
	btnGoTop.onclick = goTop;
};