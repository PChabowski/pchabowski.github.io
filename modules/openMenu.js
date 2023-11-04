function openMenu() {
	const menu = document.getElementById("Topnav");
	if (menu.className == "Topnav") {
		menu.className += " show";
	} else {
		menu.className = "Topnav";
	}
}

function initOpenMenu() {
	const btnOpenMenu = document.getElementById('open-menu');
	btnOpenMenu.onclick = openMenu;
}

export { initOpenMenu };