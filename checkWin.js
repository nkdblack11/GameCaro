function doc(i, j, value) {
    let check = 1;
    let before = 1;
    let after = 1;
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) + x) + '' + j).innerText;
        if (value == value1) {
            check++
        } else {
            before = document.getElementById('line' + (parseInt(i) + x) + '' + j).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    }
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) - x) + '' + j).innerText;
        if (value == value1) {
            check++
            if (check == 5) {
                alertWin()
            }
        } else {
            after = document.getElementById('line' + (parseInt(i) - x) + '' + j).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    } else if (check == 4 && !before && !after) {
        alertWin()
    }
}

function ngang(i, j, value) {
    let check = 1;
    let before = 1;
    let after = 1;
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + i + '' + (parseInt(j) + x)).innerText;
        if (value == value1) {
            check++
        } else {
            before = document.getElementById('line' + i + '' + (parseInt(j) + x)).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    }
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + i + '' + (parseInt(j) - x)).innerText;
        if (value == value1) {
            check++
            if (check == 5) {
                alertWin()
            }
        } else {
            after = document.getElementById('line' + i + '' + (parseInt(j) - x)).innerText
            break;
        }
    }
    if (check == 5) {
        alertWin()
    } else if (check == 4 && !before && !after) {
        alertWin()
    }
}

function cheo(i, j, value) {
    let check = 1;
    let before = 1;
    let after = 1;
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) - x) + '' + (parseInt(j) - x)).innerText;
        if (value == value1) {
            check++
        } else {
            before = document.getElementById('line' + (parseInt(i) - x) + '' + (parseInt(j) - x)).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    }
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) + x) + '' + (parseInt(j) + x)).innerText;
        if (value == value1) {
            check++
            if (check == 5) {
                alertWin()
            }
        } else {
            after = document.getElementById('line' + (parseInt(i) + x) + '' + (parseInt(j) + x)).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    } else if (check == 4 && !before && !after) {
        alertWin()
    }
}

function cheo2(i, j, value) {
    let check = 1;
    let before = 1;
    let after = 1;
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) - x) + '' + (parseInt(j) + x)).innerText;
        if (value == value1) {
            check++
        } else {
            before = document.getElementById('line' + (parseInt(i) - x) + '' + (parseInt(j) + x)).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    }
    for (let x = 1; x < 6; x++) {
        let value1 = document.getElementById('line' + (parseInt(i) + x) + '' + (parseInt(j) - x)).innerText;
        if (value == value1) {
            check++
            if (check == 5) {
                alertWin()
            }
        } else {
            after = document.getElementById('line' + (parseInt(i) + x) + '' + (parseInt(j) - x)).innerText;
            break;
        }
    }
    if (check == 5) {
        alertWin()
    } else if (check == 4 && !before && !after) {
        alertWin()
    }
}

function alertWin() {
    setTimeout(() => alert('Win'), 200) // es 6
    // function callback(){                    // kiểu js cổ điển
    //     alert('Win')
    // }
    // setTimeout(callback, 200)

}

function SetWin(i, j, value) {
    doc(i, j, value);
    ngang(i, j, value);
    cheo(i, j, value);
    cheo2(i, j, value);
}