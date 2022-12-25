'use strict'
window.addEventListener('DOMContentLoaded', () => {
    let game = document.querySelector('.puzzle-game');
    let source = game.querySelector('.puzzle-source');
    let result = game.querySelector('.puzzle-result');

    const scale = 3
    const width = 3 * scale;
    const height = 2 * scale;
    const size = 150 / scale;
    const imageUrl = 'image.JPG';
    let doneCount = 0;

    result.style.gridTemplateColumns = `repeat(${width}, ${size}px)`;


    let tiles = [];
    for (let y = 0; y < height; y++) {
        tiles[y] = [];
        for (let x = 0; x < width; x++) {
            let cell = document.createElement('div');
            cell.className = 'puzzle-cell';
            cell.x = x;
            cell.y = y;
            cell.style.width = `${size}px`;
            cell.style.height = `${size}px`;
            cell.style.zIndex = 5;
            result.append(cell);

            let tile = document.createElement('div');
            tile.className = 'puzzle-item';
            tile.x = x;
            tile.y = y;
            tile.style.backgroundPosition = `${-x * size}px ${-y * size}px`;
            tile.style.backgroundImage = `url(${imageUrl})`;
            tile.style.width = `${size}px`;
            tile.style.height = `${size}px`;
            cell.append(tile);
            tiles[y].push(tile);
        }
    }

    let leftPane = game.querySelector('.left-container');
    let srcWidth = leftPane.offsetWidth;
    let srcHeight = leftPane.offsetHeight;

    for (let i = 0; i < 1000; i++) {
        let randX = Math.round(Math.random() * (width - 1));
        let randY = Math.round(Math.random() * (height - 1));
        let randTile = tiles[randY][randX];
        let posLeft = Math.round(srcWidth * 0.10 + Math.random() * (srcWidth * 0.7));
        let posTop = Math.round(srcWidth * 0.1 + Math.random() * (srcHeight * 0.7));

        randTile.style.position = 'absolute';
        randTile.style.left = `${posLeft}px`;
        randTile.style.top = `${posTop}px`;

        source.append(randTile);
    }

    source.addEventListener('mousedown', e => {
        let target = e.target;
        if (target.classList.contains('puzzle-item')) {
            e.preventDefault();
            for (let tile of source.children) {
                tile.style.zIndex = 6;
            }

            target.style.zIndex = 10;
            target.style.pointerEvents = 'none';

            let currentX = e.clientX;
            let currentY = e.clientY;

            let checkMove = e => {
                let diffX = e.clientX - currentX;
                let diffY = e.clientY - currentY;
                target.style.top = `${target.offsetTop + diffY}px`;
                target.style.left = `${target.offsetLeft + diffX}px`;
                currentX = e.clientX;
                currentY = e.clientY;
            };

            let checkOver = e => {
                let tcell = e.target;
                if (tcell.classList.contains('puzzle-cell')) {
                    if (tcell.x === target.x && tcell.y === target.y) {
                        target.style.position = 'relative';
                        target.style.top = 0;
                        target.style.left = 0;
                        // target.style.border = 'solid 1px black';
                        target.style.border = 'none';
                        tcell.append(target);
                        doneCount++;
                    };
                };
                document.removeEventListener('mousemove', checkMove);
                document.removeEventListener('mouseup', checkOver);
                target.style.pointerEvents = 'all';

                if (doneCount == width * height) {
                    alert("VICTORY");
                };
            };
            document.addEventListener('mousemove', checkMove);
            document.addEventListener('mouseup', checkOver);
        }
    });
}); 	