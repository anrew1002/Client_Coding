document.addEventListener('DOMContentLoaded', e => {

    const mw = document.querySelector('.mw');
    const width = 5;
    const height = 5;
    const bombCount = 5;
    let bombMap = [];

    let createBombs = () => {
        let count = 0;
        for (let y = 0; y < width; y++) {
            let row = []
            for (let x = 0; x < height; x++) {
                row.push(0)
            }
            bombMap.push(row)

        }
        for (let i = 0; i < bombCount; i++) {
            let randX = Math.round(Math.random() * (width - 1));
            let randY = Math.round(Math.random() * (height - 1));
            while (bombMap[randY][randX]) {
                console.log("FoRRRRRR")
                randX = Math.round(Math.random() * (width - 1));
                randY = Math.round(Math.random() * (height - 1));
            }
            bombMap[randY][randX] = 1;
        }

    }

    createBombs();

    mw.style.setProperty('--columns-count', width);
    for (let y = 0; y < width; y++) {
        for (let x = 0; x < height; x++) {
            let mwCell = document.createElement('div');
            mwCell.className = 'mw-cell';
            mwCell.x = x;
            mwCell.y = y;
            mwCell.textContent = bombMap[y][x] ? "💣" : ''
            mw.append(mwCell);
        }
    }
    let gameStarted = false;
    mw.addEventListener('click', e => {
        const t = e.target;
        if (t.classList.contains('mw-cell')) {
            if (!gameStarted) {
                startGame();
            }
            console.log(t.x, t.y);
        }

    });

    let startGame = () => {
        gameStarted = true;
        createBombs();
    };




});