const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const wrapper = document.getElementById('wrapper');

openBtn.addEventListener('click', () => {
    wrapper.classList.add('show');
    openBtn.style.display = 'none';
    closeBtn.focus()
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('show');
    openBtn.style.display = 'block';
});

wrapper.addEventListener('click', (e) => {
    if (e.target === wrapper) {
        wrapper.classList.remove('show');
        openBtn.style.display = 'block';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        wrapper.classList.remove('show');
        openBtn.style.display = 'block';
    }
});