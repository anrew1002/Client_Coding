document.addEventListener('DOMContentLoaded', e => {

    const mw = document.querySelector('.mw');
    const width = 5;
    const height = 5;
    const bombCount = 2;
    let bombMap = [];
    let bombNum = [];
    let bombCell = [];

    let createBombs = (startX, startY) => {
        let count = 0;
        bombMap = [];
        bombNum = [];

        for (let y = 0; y < width; y++) {
            let row = []
            let rowNum = []
            for (let x = 0; x < height; x++) {
                row.push(0)
                rowNum.push(0)
            }
            bombMap.push(row)
            bombNum.push(rowNum)

        }
        for (let i = 0; i < bombCount; i++) {
            let randX = Math.round(Math.random() * (width - 1));
            let randY = Math.round(Math.random() * (height - 1));
            while (bombMap[randY][randX] || (startX === randX && startY === randY)) {
                randX = Math.round(Math.random() * (width - 1));
                randY = Math.round(Math.random() * (height - 1));
            }
            bombMap[randY][randX] = 1;
        }
        for (let y = 0; y < width; y++) {
            for (let x = 0; x < height; x++) {
                if (bombMap[y][x]) {
                    if (x > 0) {
                        bombNum[y][x - 1]++;
                    }
                    if (x < width - 1) {
                        bombNum[y][x + 1]++;
                    }
                    if (y > 0) {
                        bombNum[y - 1][x]++;
                    }
                    if (y < height - 1) {
                        bombNum[y + 1][x]++;
                    }
                    if (y < height - 1 && x < width - 1) {
                        bombNum[y + 1][x + 1]++;
                    }
                    if (x > 0 && y > 0) {
                        bombNum[y - 1][x - 1]++;
                    }
                    if (y > 0 && x < width - 1) {
                        bombNum[y - 1][x + 1]++;
                    }
                    if (y < height - 1 && x > 0) {
                        bombNum[y + 1][x - 1]++;
                    }
                }
            }
        }


    }

    createBombs();

    mw.style.setProperty('--columns-count', width);
    for (let y = 0; y < width; y++) {
        bombCell.push([])
        for (let x = 0; x < height; x++) {
            let mwCell = document.createElement('div');
            mwCell.tabIndex = 0
            mwCell.className = 'mw-cell';
            mwCell.x = x;
            mwCell.y = y;
            // mwCell.classList.add('mw-cell--bomb')
            bombCell[y][x] = mwCell
            mw.append(mwCell);

        }
    }
    let openCell = (cell, check) => {
        console.log(cell.x, cell.y)
        if (cell.classList.contains('mw-cell--open')) {
            return;
        }
        let x = cell.x;
        let y = cell.y;
        cell.classList.add('mw-cell--open');
        if (!check && bombMap[y][x]) {
            cell.classList.add("mw-cell--bomb")
            window.location.reload();
        }
        else if (!check && bombNum[y][x]) {
            cell.textContent = bombNum[y][x]
        }
        else {
            if (x > 0) {
                openCell(bombCell[y][x - 1])
            }
            if (x < width - 1) {
                openCell(bombCell[y][x + 1])
            }
            if (y > 0) {
                openCell(bombCell[y - 1][x])
            }
            if (y < height - 1) {
                openCell(bombCell[y + 1][x])
            }
            if (y < height - 1 && x < width - 1) {
                openCell(bombCell[y + 1][x + 1])
            }
            if (x > 0 && y > 0) {
                openCell(bombCell[y - 1][x - 1])
            }
            if (y > 0 && x < width - 1) {
                openCell(bombCell[y - 1][x + 1])
            }
            if (y < height - 1 && x > 0) {
                openCell(bombCell[y + 1][x - 1])
            }
        }
    }
    let gameStarted = false;


    cellInteract = (e) => {
        const t = e.target;
        if (t.classList.contains('mw-cell')) {
            if (!gameStarted) {
                startGame();
            }
            openCell(t, false);
            console.log(t.x, t.y);
        }

    }

    mw.addEventListener('click', cellInteract);
    mw.addEventListener('keydown', e => {
        const t = e.target
        switch (e.key) {
            case "Enter":
            case "Space":
                console.log("Okett")
                cellInteract(e)
                break;
        }

    });

    let startGame = () => {
        gameStarted = true;
        createBombs();
        console.log(bombMap)
    };
});