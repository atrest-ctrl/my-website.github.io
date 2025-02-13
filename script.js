// Пример простого JavaScript для интерактивности
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт кафе "Доброй ночи" загружен!');
    // Можно добавить интерактивные элементы, например, изменение цвета заголовка
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        header.style.color = '#ffcc00';
    });
});
