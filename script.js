const grid = document.querySelector('.grid');

for (let i = 1; i <= 21; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const img = document.createElement('img');
    img.src = `images/${i}.svg`;
    img.alt = `Image ${i}`;
    gridItem.appendChild(img);
    grid.appendChild(gridItem);
}

imagesLoaded(grid, function() {
    new Masonry(grid, {
        itemSelector: '.grid-item'
    });
});
