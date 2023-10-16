const goTopBtn = document.getElementById("goTop");
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		goTopBtn.classList.add("show");
	} else {
		goTopBtn.classList.remove("show");
	}
}

function goTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function initSFunAndGoTop() {
	goTopBtn.onclick = goTop;
}

window.onscroll = scrollFunction;

export { initSFunAndGoTop };