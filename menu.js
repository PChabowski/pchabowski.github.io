function onePage(pageName) {
    let tabcontent;
	tabcontent = document.getElementsByClassName("article");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
	}
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();

function activButton() {
	var btnTopnav = document.getElementById("Topnav");
	var btns = btnTopnav.getElementsByClassName("button");
	for (var i = 0; i < btns.length; i++) {
		btns[i].className = "button";
	}
    btns[page].className += " active";
}


function btnmenu(){
	var x = document.getElementById("Topnav");
	if(x.className == "Topnav"){
		x.className += " show";
	} else {
		x.className = "Topnav";
	}
}

let goTopBtn = document.getElementById("goTop");
window.onscroll = function () {scrollFunction()};
function scrollFunction () {
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