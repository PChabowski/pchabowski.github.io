document.addEventListener('DOMContentLoaded', () => {
    // Panel Profile Logic
    const panel = document.getElementById('profile-panel');
    const avatar = document.getElementById('avatar-btn');
    const closeBtn = document.getElementById('hide-panel-btn');

    if (avatar && panel) {
        avatar.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(panel).display === 'none';
            panel.style.display = isHidden ? 'flex' : 'none';
        });
    }

    if (closeBtn && panel) {
        closeBtn.addEventListener('click', () => {
            panel.style.display = 'none';
        });
    }

    // Project Modal Logic
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeModal = document.getElementById('close-modal');
    const projectCards = document.querySelectorAll('.grid > div');
    const modalDesc = document.getElementById('modal-desc');
    const modalLiveLink = document.getElementById('modal-live-link');
    const modalRepoLink = document.getElementById('modal-repo-link');

    if (modal) {
        projectCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const liveLink = card.getAttribute('data-live');
                const repoLink = card.getAttribute('data-repo');
                const title = card.querySelector('h3').innerText;
                const imgSrc = card.querySelector('img').src;
                const description = card.getAttribute('data-description') || "Brak opisu dla tego projektu.";

                if (modalLiveLink) {
                    modalLiveLink.href = liveLink || '#';
                    modalLiveLink.style.display = liveLink ? 'inline-block' : 'none';
                }
                if (modalRepoLink) {
                    modalRepoLink.href = repoLink || '#';
                    modalRepoLink.style.display = repoLink ? 'inline-block' : 'none';
                }

                modalTitle.innerText = title;
                modalImg.src = imgSrc;
                modalDesc.innerText = description;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeProjectModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        if (closeModal) closeModal.addEventListener('click', closeProjectModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (themeToggle) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        });
    }

    // Filter Projects Logic
    const filterButtons = document.querySelectorAll('.filter-btn');


if (filterButtons.length > 0) {
    // 1. Upewnij się, że nawigacja ma aria-label, jeśli jeszcze nie została dodana przez JS
    const nav = filterButtons[0].closest('nav');
    if (nav && !nav.hasAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Filtrowanie projektów');
    }

    filterButtons.forEach(btn => {
        // 2. Inicjalizacja atrybutów dostępności
        btn.setAttribute('type', 'button');
        const isActive = btn.classList.contains('text-primary');
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');

        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // 3. Aktualizacja stylów i atrybutów ARIA
            filterButtons.forEach(b => {
                b.classList.remove('text-primary', 'font-bold');
                b.classList.add('text-text-light', 'dark:text-text-dark');
                b.setAttribute('aria-pressed', 'false'); // Resetujemy stan wszystkich
            });

            btn.classList.add('text-primary', 'font-bold');
            btn.classList.remove('text-text-light', 'dark:text-text-dark');
            btn.setAttribute('aria-pressed', 'true'); // Ustawiamy stan aktywnego

            // 4. Logika filtrowania kart
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
const data = { updatedCount: filterButtons.length };
});
