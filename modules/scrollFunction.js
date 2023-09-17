function scrollFunction() {
	let goTopBtn = document.getElementById("goTop");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		goTopBtn.style.transition = "all 0.5s";
		goTopBtn.style.display = "block";
	} else {
		goTopBtn.style.transition = "all 0.5s";
		goTopBtn.style.display = "none";
	}
}

export default scrollFunction;
