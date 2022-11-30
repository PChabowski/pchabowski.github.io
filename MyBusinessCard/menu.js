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
		<p>Cześć, ja jestem Paweł. Od dłuższego czasu uczę sie HTMLa, CSSa i JavaScript, a stronę którą widzisz sam zrobiłem, właśnie w tych wymienionych technologiach. Myślę ze bardzo dobrze umiem HTML, CSS, a JSa cały czas się uczę. Mam zamiar w przyszłośći nauczyć się Reacta, ale to dopiero po większym zapoznaniu się z JS. Chwili obecnej mam zamiar założyć bloga informatycznego na którym będę się dzielił, własną zdobytą wiedzą na temat tych różnych technologi których się obecnie uczę. Bloga mam zamiar zrobić na WordPressie. Aczkolwiek nie za bardzo lubie sie z tą technologią WP, ale powoli się uczę. Małymi krokami zmierzam w kierunku Front-Endu. Po więcej informacji o mnie zapraszam <a onclick="menu(1)">tutaj.</a></p>\
		<div class="social clear">\
			<a href=""><i class="icon-facebook"></i></a> \
			<a href=""><i class="icon-instagram"></i></a> \
			<a href=""><i class="icon-github-circled"></i></a> \
			<!-- <a href=""><i class="icon-globe"></i></a> --> \
		</div>'
	}
	else if(num == 1){
		c.innerHTML = '<main><article><header><h3>O mnie</h3></header>\
		<figure>\
			<img src="img.jpg" width="300" height="220"> \
			<figcaption>Paweł Chabowski</figcaption>\
		</figure>\
		<p>Cześć, ja jestem Paweł. Od dłuższego czasu uczę sie HTMLa, CSSa i JavaScript, a stronę którą widzisz sam zrobiłem, właśnie w tych wymienionych technologiach. Myślę ze bardzo dobrze umiem HTML, CSS, a JSa cały czas się uczę. Mam zamiar w przyszłośći nauczyć się Reacta, ale to dopiero po większym zapoznaniu się z JS. Chwili obecnej mam zamiar założyć bloga informatycznego na którym będę się dzielił, własną zdobytą wiedzą na temat tych różnych technologi których się obecnie uczę. Bloga mam zamiar zrobić na WordPressie. Aczkolwiek nie za bardzo lubie sie z tą technologią WP, ale powoli się uczę. Małymi krokami zmierzam w kierunku Front-Endu.</p>\
		<p>Po za tym ze, uczę się języka Front-Endowego i uwilbiam się uczyć i rozwijać. Mam też inne zainteresowania, np. uwielbiam grać na gitarz, i zarówno tak jak przy programowaniu i przy graniu na gitarze, to i przy jednym i drugim mam stany flow. Mówię sobie, pogram sobie chwile na gitarze albo zaprojektuję strone. I ta chwila mija, a potem patrzę na zegra i widzę jak mineły 2, 3, 4 godziny albo i więcej, i się zastanawiasz jak ten czas mógł tak szybko minąć? przecież to była zaledwie chwila, a tu czas iść do pracy albo innymi obowiązkami zająć.</p>\
		<p>Również po za uczeniem się i samorozwojem, lubie też iść sobie po biegać, tak ze 30 minut dla zdrowia. Ostanimi czasy zaczynam czytać więcej książek, a nawet też rozwiązuje sudoku, coraz częściej widzę jak rozwiązywanie sudoku pomaga przy rozwiązywaniu problemów przy programowaniu, i nie tylko przy programowaniu. Uwielbiam też czasami spisywać własne myśli i spostrzeżenia na temat życia, którymi rzadziej dzielę się na swoim obecnym, blogu o <a href="https://symbolicthelightoflife.blogspot.com/">tutaj.</a> Myślę że to by było już, na tyle o mnie. Dziękuję za uwage;)</p>\
		<p></p>\
		<div class="social clear">\
			<a href=""><i class="icon-facebook"></i></a> \
			<a href=""><i class="icon-instagram"></i></a> \
			<a href=""><i class="icon-github-circled"></i></a> \
			<!-- <a href=""><i class="icon-globe"></i></a> --> \
		</div>'
	}
	else if(num == 2){
		c.innerHTML = "<main><article><header><h3>Portfolio</h3></header><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> \
		\
		<p>Duis tristique tempor nunc vitae accumsan. Aliquam dignissim vestibulum augue, in vulputate ipsum vulputate ac. Phasellus ultricies felis in dictum feugiat. Nunc at hendrerit justo. Fusce quam ex, blandit non lacus id, egestas tincidunt purus. Etiam nec arcu eget sem ornare porta vitae ornare nulla. Duis sit amet pharetra nunc. Pellentesque vulputate leo dolor, ut sodales dolor condimentum ac. Donec id semper dui.</p></article></main>"
	}
	else{
		c.innerHTML = "<main><article><header><h3>Contact</h3></header><p>Nulla tristique cursus ipsum, vitae vulputate massa. Cras auctor libero eu ultrices ornare. Donec blandit consequat neque vel dignissim. Curabitur sed erat at lorem pellentesque sollicitudin eget id enim. Maecenas pharetra placerat velit, vitae eleifend augue faucibus eu. Vivamus non mauris aliquet leo dapibus consectetur. Phasellus sed auctor ipsum. Sed et augue vitae augue tempor luctus. Integer pharetra sodales eros, ac elementum nisi dapibus nec. Sed eget velit quis elit eleifend ultricies.</p></article></main>"
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