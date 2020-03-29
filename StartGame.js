let BoardCaro = function (line, column) {
    this.line = line;
    this.column = column;

    this.createTable = function () {
        let board = '<table border="1">';
        for (i = 0; i < this.line; i++) {
            board += '<tr>'
            for (j = 0; j < this.column; j++) {
                board += '<td align="center" id="line' + i + '' + j + '" data-j="'+ j +'" data-i="'+ i +'" onclick="start(this)"></td>'
            }
            board += '</tr>'
        }
        board += '<table>'
        document.getElementById('gameCaro').innerHTML = board
    }
};
let x = 1
function start(element1) {
    let i = element1.getAttribute('data-i')
    let j = element1.getAttribute('data-j')
    if (!element1.innerText) {
        if (x === 1) {
            element1.innerText = 'O'
            x = 0
        } else {
            element1.innerText = 'X'
            x = 1
        }
        SetWin(i,j, element1.innerText);
    }
}
let boardCaro = new BoardCaro(15, 15)
boardCaro.createTable();