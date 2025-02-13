document.addEventListener('DOMContentLoaded', function() {
    // Получаем текущий URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Находим все ссылки в навигации
    const navLinks = document.querySelectorAll('nav ul li a');

    // Добавляем класс 'active' для текущей страницы
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Анимация для заголовка
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        header.style.color = '#ffcc00';
        header.style.transition = 'color 0.5s ease';
    });

    // Анимация для кнопок
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
