const buttons = document.querySelectorAll('.button');

export function initOnePage() {
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			onePage(button.getAttribute('href').substring(1), button);
		});
	});
}

function onePage(sectionId, button) {
	const sections = document.querySelectorAll('.article');
	sections.forEach((section) => {
		section.style.display = 'none';
	});

	const sectionToShow = document.getElementById(sectionId);
	sectionToShow.style.display = 'block';

	buttons.forEach(btn => {
		btn.classList.remove('active');
	});

	button.classList.add('active');
}