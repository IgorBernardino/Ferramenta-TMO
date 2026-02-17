
    // ── GLOBALS ──
    let currentImages = [];
    let modalIdx = 0;

    // ── CAROUSEL ──
    function moveSlide(btn, direction) {
        const container = btn.closest('.slider-container');
        const wrapper = container.querySelector('.slider-wrapper');
        const slides = wrapper.querySelectorAll('img');
        const dots = container.querySelectorAll('.dot');

        let currentIndex = parseInt(wrapper.dataset.index || 0);
        currentIndex += direction;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;

        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        wrapper.dataset.index = currentIndex;

        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    // ── ZOOM MODAL ──
    function setupZoom() {
        document.querySelectorAll('.slider-wrapper img').forEach(img => {
            img.removeEventListener('click', openZoom);
            img.addEventListener('click', openZoom);
        });
    }

    function openZoom() {
        const wrapper = this.closest('.slider-wrapper');
        currentImages = Array.from(wrapper.querySelectorAll('img')).map(i => i.src);
        modalIdx = currentImages.indexOf(this.src);
        document.getElementById('img-ampliada').src = this.src;
        document.getElementById('zoom-modal').style.display = 'flex';
    }

    function changeModalImg(dir) {
        modalIdx += dir;
        if (modalIdx >= currentImages.length) modalIdx = 0;
        if (modalIdx < 0) modalIdx = currentImages.length - 1;
        document.getElementById('img-ampliada').src = currentImages[modalIdx];
    }

    function closeZoom() {
        document.getElementById('zoom-modal').style.display = 'none';
    }

    // ── FILTER ──
    function filterItems(category) {
        const items = document.querySelectorAll('.item');
        const btns = document.querySelectorAll('.tab-btn');

        btns.forEach(btn => {
            const txt = btn.innerText.toLowerCase();
            btn.classList.toggle('active', txt.includes(category) || (category === 'todos' && txt === 'todos'));
        });

        let visible = 0;
        items.forEach(item => {
            const match = category === 'todos' || item.dataset.category === category;
            if (match) {
                item.classList.remove('hidden');
                item.style.opacity = '0';
                setTimeout(() => { item.style.opacity = '1'; item.style.transition = 'opacity 0.4s ease'; }, 20);
                visible++;
            } else {
                item.classList.add('hidden');
            }
        });

        document.getElementById('count').textContent = visible;
    }

    // ── INIT ──
    document.addEventListener('DOMContentLoaded', () => {
        const closeModalBtn = document.querySelector('.close-modal');
        if (closeModalBtn) closeModalBtn.onclick = closeZoom;

        window.onclick = (e) => {
            const modal = document.getElementById('zoom-modal');
            if (e.target === modal) closeZoom();
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeZoom();
            if (e.key === 'ArrowRight') changeModalImg(1);
            if (e.key === 'ArrowLeft') changeModalImg(-1);
        });

        setupZoom();
    });
