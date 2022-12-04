function menu(sw)
{
	var c = document.getElementById("content");

	var num = sw;
	if(num == 0){
		c.innerHTML = '<main><article><header><h3>Witaj, na mojej stronie!</h3></header>\
		<figure>\
			<img src="img.jpg" width="300" height="220"> \
			<figcaption>Paweł Chabowski</figcaption>\
		</figure>\
		<p>Cześć, ja jestem Paweł. Od dłuższego czasu uczę sie HTMLa, CSSa i JavaScript, a stronę którą widzisz sam zrobiłem, właśnie w tych wymienionych technologiach. Myślę ze bardzo dobrze umiem HTML, CSS, a JSa cały czas się uczę. Mam zamiar w przyszłośći nauczyć się Reacta, ale to dopiero po większym zapoznaniu się z JS. Chwili obecnej mam zamiar założyć bloga informatycznego na którym będę się dzielił, własną zdobytą wiedzą na temat tych różnych technologi których się obecnie uczę. Bloga mam zamiar zrobić na WordPressie. Aczkolwiek nie za bardzo lubie sie z tą technologią WP, ale powoli się uczę. Małymi krokami zmierzam w kierunku Front-Endu. Po więcej informacji o mnie zapraszam <a onclick="menu(1)">tutaj.</a></p></article>\
		<div class="social clear">\
			<a href="https://www.facebook.com/profile.php?id=100007308978966" target="_blank"><i class="icon-facebook"></i></a> \
			<a href="https://www.instagram.com/rudo.brody.viking/" target="_blank"><i class="icon-instagram"></i></a> \
			<a href="https://github.com/PChabowski" target="_blank"><i class="icon-github-circled"></i></a> \
		</div></main>'
	}
	else if(num == 1){
		c.innerHTML = '<main><article><header><h3>O mnie</h3></header>\
		<figure>\
			<img src="img.jpg" width="300" height="220"> \
			<figcaption>Paweł Chabowski</figcaption>\
		</figure>\
		<p>Cześć, ja jestem Paweł. Od dłuższego czasu uczę sie HTMLa, CSSa i JavaScript, a stronę którą widzisz sam zrobiłem, właśnie w tych wymienionych technologiach. Myślę ze bardzo dobrze umiem HTML, CSS, a JSa cały czas się uczę. Mam zamiar w przyszłośći nauczyć się Reacta, ale to dopiero po większym zapoznaniu się z JS. Chwili obecnej mam zamiar założyć bloga informatycznego na którym będę się dzielił, własną zdobytą wiedzą na temat tych różnych technologi których się obecnie uczę. Bloga mam zamiar zrobić na WordPressie. Aczkolwiek nie za bardzo lubie sie z tą technologią WP, ale powoli się uczę. Małymi krokami zmierzam w kierunku Front-Endu.</p>\
		<p>Po za tym ze, uczę się języka Front-Endowego i uwilbiam się uczyć i rozwijać. Mam też inne zainteresowania, np. uwielbiam grać na gitarz, i zarówno tak jak przy programowaniu i przy graniu na gitarze, to i przy jednym i drugim mam stany flow. Mówię sobie, pogram sobie chwile na gitarze albo zaprojektuję strone. I ta chwila mija, a potem patrzę na zegra i widzę jak mineły 2, 3, 4 godziny albo i więcej, i się zastanawiasz jak ten czas mógł tak szybko minąć? przecież to była zaledwie chwila, a tu czas iść do pracy albo innymi obowiązkami zająć.</p>\
		<p>Również po za uczeniem się i samorozwojem, lubie też iść sobie po biegać, tak ze 30 minut dla zdrowia. Ostanimi czasy zaczynam czytać więcej książek, a nawet też rozwiązuje sudoku, coraz częściej widzę jak rozwiązywanie sudoku pomaga przy rozwiązywaniu problemów przy programowaniu, i nie tylko przy programowaniu. Uwielbiam też czasami spisywać własne myśli i spostrzeżenia na temat życia, którymi rzadziej dzielę się na swoim obecnym, blogu o <a href="https://symbolicthelightoflife.blogspot.com/" target="_blank">tutaj.</a> Myślę że to by było już, na tyle o mnie. Dziękuję za uwage;)</p></article>\
		<div class="social clear">\
			<a href="https://www.facebook.com/profile.php?id=100007308978966" target="_blank"><i class="icon-facebook"></i></a> \
			<a href="https://www.instagram.com/rudo.brody.viking/" target="_blank"><i class="icon-instagram"></i></a> \
			<a href="https://github.com/PChabowski" target="_blank"><i class="icon-github-circled"></i></a> \
			<!-- <a href=""><i class="icon-globe"></i></a> --> \
		</div></main>'
	}
	else if(num == 2){
		c.innerHTML = '<main><article><header><h3>Moje Projekty</h3><h2>Moja strona</h2></header><p>Strone którą widzisz jest moim pierwszym projektem publiczny, który w początkowej fazie wykonałem z pomocą Bootstrapa5, HMTLa, CSSa i JavaScript. Ale w końcowej fazie wywaliłem BS5, ponieważ ten framework mi nie odpowiada pod wieloma względami, chociażby miedzy innymi takim że momentami jak chcesz cos zmienić wyglądzie strony to musisz użyć klazuli <code>!important</code>. I tak właśnie obecnie prezentuje się moja strona bez BS5.</p>\
		\
		<header><h2>O to kolejny projekt</h2><p>informacje o kolejny projekcie.</p></header>\
		</article></main>'
	}
	else{
		c.innerHTML = '<main><article><header><h3>Kontak do mnie</h3><h2>Paweł Chabowski</h2></header><div class="contact"><p>Jeśli masz jakieś pytanie lub chciałbyś podzielić sie jakąś informacją albo zapytać o współpracę, to zapraszam do kontaktu.</p><p><b>Email:</b> <a href="mailto:p.chabowski1@gmail.com">p.chabowski1@gmail.com</a></p><p>Postaram sie odpowiedzieć w miare najszybciej jak to tylko będzie możliwe. Zapraszam również do kontatku przez podane niżej social media.</p></div></article><div class="social clear">\
			<a href="https://www.facebook.com/profile.php?id=100007308978966" target="_blank"><i class="icon-facebook"></i></a> \
			<a href="https://www.instagram.com/rudo.brody.viking/" target="_blank"><i class="icon-instagram"></i></a> \
			<a href="https://github.com/PChabowski" target="_blank"><i class="icon-github-circled"></i></a> \
			<!-- <a href=""><i class="icon-globe"></i></a> --> </div> \
		</main>'
	}
	active();
}

function active() {
	var btnTopnav = document.getElementById("Topnav");
	var btns = btnTopnav.getElementsByClassName("button");
	
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}

function btnmenu(){
	var x = document.getElementById("Topnav");
	if(x.className == "Topnav clear"){
		x.className += " show";
	} else {
		x.className = "Topnav clear";
	}
}