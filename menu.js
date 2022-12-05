function showArticle(page) {
    const articles = ["strona-glowna", "o-mnie", "projekty", "kontakt"];
    for (let i = 0; i < articles.length; i++) {
        document.getElementById(articles[i]).style.display = "none";
}
    document.getElementById(articles[page]).style.display = "block";
    document.location.href = "#"+articles[page];

	var btnTopnav = document.getElementById("Topnav");
	var btns = btnTopnav.getElementsByClassName("button");
	for (var i = 0; i < btns.length; i++) {
		btns[i].className = "button";
	}
    btns[page].className += " active";
}

function btnmenu(){
	var x = document.getElementById("Topnav");
	if(x.className == "Topnav clear"){
		x.className += " show";
	} else {
		x.className = "Topnav clear";
	}
}