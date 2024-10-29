const grid = document.querySelector('.grid');
const imageCount = 21;
const imageIndices = Array.from({ length: imageCount }, (_, i) => i + 1);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(imageIndices);

for (let i = 0; i < imageCount; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const img = document.createElement('img');

    const imageIndex = imageIndices[i];
    img.src = `images/${imageIndex}.svg`;
    img.alt = `Image ${imageIndex}`;

    gridItem.appendChild(img);
    grid.appendChild(gridItem);
}

imagesLoaded(grid, function() {
    new Masonry(grid, {
        itemSelector: '.grid-item'
    });
});
