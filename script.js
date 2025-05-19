const imageElement = document.getElementById('seasonal-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const seasonNameElement = document.getElementById('season-name');

const seasons = [
    { name: 'Весна', imageUrl: 'images/vesna.jpg.png' },
    { name: 'Літо', imageUrl: 'images/lito.jpg.jpg' },
    { name: 'Осінь', imageUrl: 'images/osin.jpg.jpg' },
    { name: 'Зима', imageUrl: 'images/zyma.jpg.jpg' }
];

let currentIndex = 0;

function updateImage() {
    const currentSeason = seasons [currentIndex];
    imageElement.src = currentSeason.imageUrl;
    imageElement.alt = `Зображення ${currentSeason.name}, згенероване ШІ`;
    seasonNameElement.textContent = currentSeason.name;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + seasons.length) % seasons.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % seasons.length;
    updateImage();
});

// Завантажуємо перше зображення при завантаженні сторінки
updateImage();
