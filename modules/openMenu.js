function openMenu() {
	const menu = document.getElementById("Topnav");
	if (menu.className == "Topnav") {
		menu.className += " show";
	} else {
		menu.className = "Topnav";
	}
}
export default openMenu;