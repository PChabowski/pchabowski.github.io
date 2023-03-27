document.getElementById("defaultOpen").click();

function onePage(pageName,elmnt) {
    let tabcontent = document.getElementsByClassName("article");
	let btn = document.getElementsByClassName("button");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
		btn[i].className = "button";
	}
    document.getElementById(pageName).style.display = "block";
	elmnt.className += " active";
}

function openMenu(){
	let menu = document.getElementById("Topnav");
	if(menu.className == "Topnav"){
		menu.className += " show";
	} else {
		menu.className = "Topnav";
	}
}

window.onscroll = function () {scrollFunction()};

function scrollFunction () {
	let goTopBtn = document.getElementById("goTop");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  goTopBtn.style.transition = "all 0.5s";
	  goTopBtn.style.display = "block";
	} else {
	  goTopBtn.style.transition = "all 0.5s";
	  goTopBtn.style.display = "none";
	}
}
 function goTop () {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}