function onePage(pageName,elmnt) {
	let tabcontent = document.getElementsByClassName("article");
	let btn = document.getElementsByClassName("button");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = "article";
		btn[i].className = "button";
	}
    document.getElementById(pageName).className += " show";
	elmnt.className += " active";
}

export default onePage;