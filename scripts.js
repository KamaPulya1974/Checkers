//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////SDK/////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// SDK
// let loadingWindow = document.getElementById('loadingWindow');
// let secondLoadingWindow = document.getElementById('secondLoadingWindow');

// внутренняя
// async function hideLoading() {
//     // анимация загрузки
//     loadingWindow.style.opacity = '0';
//     console.log('set opacity = 0');
//     setTimeout(function () {
//         loadingWindow.style.display = 'none'; // скрываем загрузку
//         console.log('set display = none');

//         // второе окно
//         setTimeout(function () {
//             secondLoadingWindow.style.opacity = '0';
//             console.log('set 2 opacity = 0');
//             setTimeout(function () {
//                 secondLoadingWindow.style.display = 'none'; // скрываем загрузку
//                 console.log('set 2 display = none');
//             }, 700);
//         }, 700);
//     }, 300);
// }


// SDK init
YaGames.init().then((ysdk) => {
  console.log("Yandex SDK initialized");
  window.ysdk = ysdk;
    // hideLoading();
});





//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////реклама////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// реклама флажок
let isAdd = true;
// let isAdd = false;

// запускаем счетчик для рекламы
function add60Timer() {
    var counter = 0;
    var timer = setInterval(function () {
      counter++;
      if (counter >= 60) {
        clearInterval(timer);
        // Выполните здесь ваше действие после истечения 60 секунд
        console.log("Прошло 60 секунд, флажок для рекламы в положении 'можно'");
        // по окончании ставим в положение "можно"
        isAdd = true;
      }
    }, 1000);
  }


function showSDKFullscreenAdv() {
    // реклама
    if (isAdd == true) {
    // флажок
    isAdd = false;

    // setTimeout(function () {
    // показываем рекламу с задержкой
    console.log('начинается реклама');
    ysdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: function (wasShown) { // по закрытию рекламы
                // запускаем счетчик до следующей рекламы
            add60Timer();
            },
            onError: function (error) {
                // Нет необходимости выполнять код в случае ошибки
            }
        },
        });
    // }, 2200);
    }
}






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////ПЕРЕМЕННЫЕ ДЛЯ НАСТРОЕК ИГРЫ/////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

let bodyElement = document.body;

// режим игры
var isComputer = true;

// против компьютера
var checkIconPc = document.getElementById("checkIconPc");
var pcSelectButton = document.getElementById("pcSelectButton");
pcSelectButton.addEventListener('click', function() {
    // если вариант не выбран
    if (!isComputer)
        // показываем
        checkIconPc.classList.remove('hiddenCkeckIcon');
        // убираем другой вариант
        checkIconPvp.classList.add('hiddenCkeckIcon');
        // ставим переменную
        isComputer = true;
});

// один на один
var checkIconPvp = document.getElementById("checkIconPvp");
var pvpSelectButton = document.getElementById("pvpSelectButton");
pvpSelectButton.addEventListener('click', function() {
    // если вариант не выбран
    if (isComputer)
        // показываем
        checkIconPvp.classList.remove('hiddenCkeckIcon');
        // убираем другой вариант
        checkIconPc.classList.add('hiddenCkeckIcon');
        // ставим переменную
        isComputer = false;
});




// варианты в настройках

// подсказки (подсветка клеток)
var isHelpOn = true;
var glowSellsYes = document.getElementById("glowSellsYes");
var glowSellsNo = document.getElementById("glowSellsNo");
glowSellsYes.addEventListener('click', function() {
    // если вариант не выбран
    if (!isHelpOn)
        // обводим вариант
        glowSellsYes.classList.add('celectedVariant');
        // убираем обводку с другого варианта
        glowSellsNo.classList.remove('celectedVariant');
        // ставим переменную
        isHelpOn = true;
});
glowSellsNo.addEventListener('click', function() {
    // если вариант не выбран
    if (isHelpOn)
        // обводим вариант
        glowSellsNo.classList.add('celectedVariant');
        // убираем обводку с другого варианта
        glowSellsYes.classList.remove('celectedVariant');
        // ставим переменную
        isHelpOn = false;
});

// уровень сложности
var isHardLevel = false;
var easyLevel = document.getElementById("easyLevel");
var hardLevel = document.getElementById("hardLevel");
easyLevel.addEventListener('click', function() {
    // если вариант не выбран
    if (isHardLevel)
        // обводим вариант
        easyLevel.classList.add('celectedVariant');
        // убираем обводку с другого варианта
        hardLevel.classList.remove('celectedVariant');
        // ставим переменную
        isHardLevel = false;
});
hardLevel.addEventListener('click', function() {
    // если вариант не выбран
    if (!isHardLevel)
        // обводим вариант
        hardLevel.classList.add('celectedVariant');
        // убираем обводку с другого варианта
        easyLevel.classList.remove('celectedVariant');
        // ставим переменную
        isHardLevel = true;
});

// за кем начало
var isPlayerMain = true;
// смена сторон (белые сверху)
var pclnvertSide = false;
var invertSide = false;

// цвет игрока в игре против компьютера
var computerColor = 'black';
var playerStarts = document.getElementById("playerStarts");
var compStarts = document.getElementById("compStarts");
playerStarts.addEventListener('click', function() {
    // если вариант не выбран
    // if (!isPlayerMain)
        // обводим вариант
        compStarts.classList.remove('celectedVariant');
        playerStarts.classList.add('celectedVariant');
        // убираем обводку с другого варианта
        // compStarts.classList.remove('celectedVariant');
        console.log('переключаем в настройках на ход игрока');
        // ставим переменную
        isPlayerMain = true;
        computerColor = 'black';
        // isPlayerMain = true;
        pclnvertSide = false;
});
compStarts.addEventListener('click', function() {
    // если вариант не выбран
    // if (isPlayerMain)
        // обводим вариант
        compStarts.classList.add('celectedVariant');
        console.log('переключаем в настройках на ход пк');
        // убираем обводку с другого варианта
        playerStarts.classList.remove('celectedVariant');
        // ставим переменную
        isPlayerMain = false;
        computerColor = 'white';
        // isPlayerMain = false;
        pclnvertSide = true;
});




// надпись цвета ходящего игрока
var sideWhiteInner = document.getElementById("sideWhiteInner");
var sideBlackInner = document.getElementById("sideBlackInner");

sideWhiteInner.style.display = 'flex';

function setSideColorInner(color) {
    if (color == 'white') {
        sideWhiteInner.style.display = 'flex';
        sideBlackInner.style.display = 'none';
    }
    else {
        sideWhiteInner.style.display = 'none';
        sideBlackInner.style.display = 'flex';
    }
}













///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////ИГРОВЫЕ ПЕРЕМЕННЫЕ///////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////


// игровая доска
let menu = document.getElementById("menu");
// игровая доска
let menuColorChoose = document.getElementById("menuColorChoose");



// игровая доска
let gameDeck = document.getElementById("gameDeck");

// цвет игрока
// let playerSide; // true - белые, false - черные
var currentSide = 'white';
// var sideInner = document.getElementById("sideInner");
// sideInner.innerHTML = 'белые';

// клетки
var cells = [];
var cellsHTML = [];
var cellLength = 100 / 8;
// массив возможных шашек для хода
var probableCellsToAttack = [];
var probableCellsToMove = [];

// шашечное поле
var checkersArray = document.getElementById('checkersArray');
// выбрана ли шашка
var isCheckerSelected = false;
// индекс выбранной шашки
var selectedCheckerIndex;
// белые шашки
var whiteCheckers = [];
var whiteCheckersIndexes = [];
var whiteCheckersHTML = [];
var aliveWhiteCount = 12;
// черные шашки
var blackCheckers = [];
var blackCheckersIndexes = [];
var blackCheckersHTML = [];
var aliveBlackCount = 12;

// временный массив побитых в этом ходе шашек
var tempAttacketCheckersArray = [];

var moveTime = '300';
var opacityTime = '130';

// компьютер
// копии поля и шашек
let reservCells = [];
let reservWhiteCheckers = [];
let reservBlackCheckers = [];



// счёт

// против пк
var playerCompScore = 0;
var compCompScore = 0;

// 1 на 1
var downPvpScore = 0;
var upPvpScore = 0;

var whiteScoreInner = document.getElementById('whiteScoreInner');
var blackScoreInner = document.getElementById('blackScoreInner');



// ничьи

// переменная 15 ходов дамками для ничьей
let kingRowMoves = 0;
// let whiteKingOutOfAttack = 0;
// let blackKingOutOfAttack = 0;

let gameDrawButton = document.getElementById('gameEndTitleInner');




// рестарт
let restartButton = document.getElementById('restartButton');


// модальное окно результатов партии
var gameEndModal = document.getElementById('gameEndModal');
gameEndModal.classList.add('displaynoneElement');
gameEndModal.classList.add('hiddenElement');
// итог партии
var gameEndTitleInner = document.getElementById('gameEndTitleInner');

var resultTitleWhite = document.getElementById('resultTitleWhite');
var resultTitleBlack = document.getElementById('resultTitleBlack');
var resultTitleNoOne = document.getElementById('resultTitleNoOne');
var resultTitlecompWins = document.getElementById('resultTitlecompWins');
var resultTitleplayerWins = document.getElementById('resultTitleplayerWins');
// var resultTitleupPlayerWins = document.getElementById('resultTitleupPlayerWins');
// var resultTitledownPlayerWins = document.getElementById('resultTitledownPlayerWins');



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////КНОПКА 'ИГРАТЬ'////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// кнопка 'играть'
var playButton = document.getElementById("playButton");
// по клику запускаем игру
// playButton.addEventListener('click', startGame());




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////СОЗДАЁМ КЛЕТКИ////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


// конструктор клетки
var cellObject = function(cellElement, index){
	this.id = cellElement;
	this.ocupied = 'no';
    this.canToMove = false;
    this.index = index;
    this.checkerIndex = undefined;
    this.checkerColor = undefined;

    // координаты клетки
	this.x = index % 8;
	this.y = Math.floor(index / 8);

    this.id.onclick = () => {
		this.makeMove(this);	
	}
}
// ход (клик по правильной клетке)
cellObject.prototype.makeMove = function(newCell) {
    console.log('makeMove 1');
    // еслии шашка не выбрана
    if (!isCheckerSelected) {
        return;
    }
    console.log('makeMove 2');

    // массив шашек, ходящих в данный момент
    let checkers = (currentSide == 'white') ? whiteCheckers : blackCheckers;

    // если клетка подходит для хода, ходим
    if (newCell.canToMove) {
        console.log('makeMove 3');
        // отключаем кликабельность
        bodyElement.style.pointerEvents = 'none';

        // возвращаем кликабельность
        setTimeout(function () {
            bodyElement.style.pointerEvents = 'unset';
        }, moveTime * 0.8);

        // убираем выделение клеток
        if (isHelpOn) {
            for (let i = 0; i < 64; i++) {
                cells[i].id.classList.remove('cellToMove');
                cells[i].canToMove = false;
            }
        }
        else {
            for (let i = 0; i < 64; i++) {
                cells[i].canToMove = false;
            }
        }

        // for (let i = 0; i < 64; i++) {
        //     cells[i].id.classList.remove('cellToMove');
        //     cells[i].canToMove = false;
        // }

        // если это атака
        if (cellsToAttack(checkers[selectedCheckerIndex]).length !== 0) {
            // сбрасываем переменную 15 ходов дамками
            kingRowMoves = 0;

            // назначаем новую клетку занятой
            newCell.ocupied = currentSide;
            // назначаем старую клетку свободной
            checkers[selectedCheckerIndex].cell.ocupied = 'no';

            // узнаем направление
            let direction;
            let startCellIndex = checkers[selectedCheckerIndex].cell; // начальная клетка
            let endCellIndex = newCell; // конечная клетка;
            let topDirection = (startCellIndex.y > endCellIndex.y ? true : false);
            let rightDirection = (startCellIndex.x < endCellIndex.x ? true : false);

            // устанавливаем направление
            if (topDirection) {
                if (rightDirection) {
                    direction = -7;
                }
                else {
                    direction = -9;
                }
            }
            else {
                if (rightDirection) {
                    direction = 9;
                }
                else {
                    direction = 7;
                }
            }

            // узнаём кол-во клеток между началом и концом
            let cellCount = startCellIndex.x > endCellIndex.x ? (startCellIndex.x - endCellIndex.x) : (endCellIndex.x - startCellIndex.x);
            cellCount -= 1;

            // записываем шашку, которую съели
            let i = 1;
            while (i < (cellCount + 1)) {
                // текущая клетка, на которой ищем побитую шашку
                let tempCell = cells[startCellIndex.index + direction * i];

                // сторона противника
                let opositeSide = currentSide == 'white' ? 'black' : 'white';

                // массив шашек той стороны, которой принадлежит искомая шашка
                let tempCheckersArray = (opositeSide == 'white' ? whiteCheckers : blackCheckers);

                // ищем побитую шашку
                if (tempCell.ocupied == opositeSide) {
                    // записываем индекс шашки во временный массив побитых шашек
                    tempAttacketCheckersArray[tempAttacketCheckersArray.length] = tempCheckersArray[tempCell.checkerIndex];

                    // помечаем шашку и клетку как побитые
                    tempCell.ocupied = 'bited';
                    tempCheckersArray[tempCell.checkerIndex].id.classList.add('tempBitedChecker');

                    // нашли шашку - выходим
                    break;
                }

                // прибавляем итерацию
                i++;
            }

            // передвигаем шашку и назначаем новую клетку
            checkers[selectedCheckerIndex].changeCoord(newCell);

            // проверка на дамку
            if (((checkers[selectedCheckerIndex].isMainSide) && (newCell.index < 8)) || ((!(checkers[selectedCheckerIndex].isMainSide)) && (newCell.index > 55))) {
                // назначаем дамку
                checkers[selectedCheckerIndex].king = true;

                // рисуем дамку
                checkers[selectedCheckerIndex].id.classList.add('kingChecker');
            }

            // если комбинация атак для текущей шашки закончилась
            if (cellsToAttack(checkers[selectedCheckerIndex]).length == 0) {
                // снимаем выделение с шашки
                isCheckerSelected = false;

                setTimeout(function () {
                    checkers[selectedCheckerIndex].id.classList.remove(checkers[selectedCheckerIndex].color == 'white' ? 'whiteCheckerSelected' : 'blackCheckerSelected');
                    checkers[selectedCheckerIndex].id.classList.remove(checkers[selectedCheckerIndex].color == 'white' ? 'whiteCheckerSelectedCopm' : 'blackCheckerSelectedCopm');
                }, moveTime);

                    // меняем сторону
                    currentSide = (currentSide == 'white' ? 'black' : 'white');
                    setSideColorInner(currentSide);
                    // currentSide == 'white' ? setSideColorInner('white') : setSideColorInner('black');

                    // убираем все шашки, съеденые за этот ход
                    // проверка на конец игры
                    setTimeout(function () {
                        if (clearBitedItems(tempAttacketCheckersArray, currentSide)) {
                            // clearBitedItems(tempAttacketCheckersArray, currentSide);
                            // чистим массив
                            tempAttacketCheckersArray = [];
                            return;
                        }
                        // чистим массив
                        tempAttacketCheckersArray = [];

                        // проверяем шашки соперника на обездвиженность
                        if (checkOutOfMoves()) { // если шашки обездвижены - выходим
                            return;
                        }
                    }, moveTime * 0.9);

                // ход компьютера (если он будет ходить)
                if (computerColor == currentSide) {
                    setTimeout(function () {
                        computerMove();
                    }, moveTime * 1.1);
                }
                

                // подсветить шашки
                setTimeout(function () {
                    lightOnCheckers();
                }, moveTime);
            }
            // если ход продолжается
            else {
                console.log('атака продолжается');
                console.log('currentSide', currentSide);
                console.log('computerColor', computerColor);
                console.log('isComputer', isComputer);
                if ((currentSide == computerColor) && (isComputer)) {
                    console.log('комп атакует повторно');
                    // ход компьютера (если он будет ходить)
                        setTimeout(function () {
                            computerMove(checkers[selectedCheckerIndex]);
                        }, moveTime * 1.1);
                }
                else {
                    // показываем новые клетки для хода
                    checkers[selectedCheckerIndex].showMoves();
                }
            }
        }
        // если это обычный ход
        else {
            // проверка на ход дамкой для случая ничьей
            if (checkers[selectedCheckerIndex].king) {
                kingRowMoves++;
                if (kingRowMoves == 15) {
                    gameEnd('ничья 15 ходов дамками без взятий');
                }
            }
            else {
                kingRowMoves = 0;
            }
            // назначаем новую клетку занятой
            newCell.ocupied = currentSide;
            // назначаем старую клетку свободной
            checkers[selectedCheckerIndex].cell.ocupied = 'no';

            // передвигаем шашку и назначаем шашке новую клетку
            checkers[selectedCheckerIndex].changeCoord(newCell);

            // снимаем выделение с шашки
            isCheckerSelected = false;

            checkers[selectedCheckerIndex].id.classList.remove(checkers[selectedCheckerIndex].color == 'white' ? 'whiteCheckerSelected' : 'blackCheckerSelected');
            checkers[selectedCheckerIndex].id.classList.remove(checkers[selectedCheckerIndex].color == 'white' ? 'whiteCheckerSelectedCopm' : 'blackCheckerSelectedCopm');
            // checkerHTML.classList.add((checkerColor == 'white') ? 'whiteCheckerSelectedCopm' : 'blackCheckerSelectedCopm');

            // меняем сторону
            currentSide = (currentSide == 'white' ? 'black' : 'white');
            setSideColorInner(currentSide);
            // currentSide == 'white' ? setSideColorInner('white') : setSideColorInner('black');
            // sideInner.innerHTML = (currentSide == 'white' ? 'белые' : 'черные');

            // проверка на дамку
            if (((checkers[selectedCheckerIndex].isMainSide) && (newCell.index < 8)) || ((!checkers[selectedCheckerIndex].isMainSide) && (newCell.index > 55))) {
                // назначаем дамку
                checkers[selectedCheckerIndex].king = true;

                // рисуем дамку
                checkers[selectedCheckerIndex].id.classList.add('kingChecker');
                // checkers[selectedCheckerIndex].id.classList.add(currentSide == 'white' ? 'whiteKingChecker' : 'blackKingChecker');
            }

            // проверяем шашки соперника на обездвиженность
            if (checkOutOfMoves()) { // если шашки обездвижены - выходим
                return;
            }

            // ход компьютера
            // if (computerColor == currentSide)
            setTimeout(function () {
                computerMove();
            }, moveTime * 1.1);

            setTimeout(function () {
                lightOnCheckers();
            }, moveTime);
        }
    }
}
// рисуем клетки
function createOriginalField() {
    for (let i = 0; i < 8; i++) {
        const row = document.createElement('div');
        row.className = 'deckRow flex-row';
        gameDeck.appendChild(row);
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }

    // красим черные и белые клетки
    cellsHTML = document.getElementsByClassName("cell");
    const rows = document.getElementsByClassName("deckRow");
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 8; j++) {
            cellsHTML[i * 8 + j].classList.add(i % 2 == j % 2 ? 'blackCell' : 'whiteCell');
        }
    }

    // создаём объекты для каждой клетки
    for (var i = 0; i < 64; i++) {
	    cells[i] = new cellObject(cellsHTML[i], i);
    }
}



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////СОЗДАЁМ И РАССТАВЛЯЕМ ШАШКИ/////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// функция-конструктор шашки
var checkerObject = function(id, color, cell, index) {
	this.id = id;
	this.color = color;
	this.king = false;
    cell.ocupied = color;
	this.alive = true;
    this.isMainSide = (color == 'white');

    // клетка
    this.cell = cell;
    // индекс в массиве своего цвета
    this.index = index;
    // сообщаем клетке её шашку
    cell.checkerIndex = this.index;
    cell.checkerColor = this.color;

    // уникальный ID шашки
    this.checkerId = this.color + 'Checker' + index;

    // записываем координаты
    this.coordX = cell.x;
    this.coordY = cell.y;

    // расставляем стили HTML-элементам шашек
    this.id.style.left = this.coordX * cellLength + 'vh';
    this.id.style.top = this.coordY * cellLength + 'vh';

	this.id.onclick = () => {
		this.selectChecker(this, this.id, this.checkerId, this.color);	
	}
}
// клик по шашке
checkerObject.prototype.selectChecker = function(checker, checkerHTML, checkerId, checkerColor) {
    console.log('заходим в select');
    // если шашка уже выбрана
    // if (isCheckerSelected == true) {
    //     return;
    // }
    // если выбрана шашка не текущей стороны - выходим
    if (checkerColor !== currentSide) {
        return;
    }

    let checkAttackCheckersArray = checkAttackCheckers();
    // console.log(checkAttackCheckersArray);
    // console.log('cellsToMoveChecker(checker)', cellsToMoveChecker(checker));
    // проверяем, можно ли походить выбранной шашкой
    if ((cellsToAttack(checker).length !== 0) !== (checkAttackCheckersArray.length !== 0)) { // 1) она атакующая 2) есть атакующие
        return;
    }
    if ((cellsToAttack(checker).length == 0) && (cellsToMoveChecker(checker).length == 0)) { // если она не атакующая и она не ходит
        return;
    }

    // // проверка на неправильную шашку (если она ходящая, а при этом есть атакующие)
    // if ((checkAttackCheckersArray.length !== 0) && (cellsToMoveChecker(checker).length !== 0)) {
    //     // добавляем класс выделения атакующим шашкам
    //     for (let i = 0; i < checkAttackCheckersArray.length; i++) {
    //         checkAttackCheckersArray[i].id.classList.add("riteCheckerToAttack");
    //     }
    //     setTimeout(() => {
    //         for (let i = 0; i < checkAttackCheckersArray.length; i++) {
    //             checkAttackCheckersArray[i].id.classList.remove('riteCheckerToAttack');
    //         }
    //     }, moveTime / 2);
    // }

    // сообщаем, что шашка выбрана
    isCheckerSelected = true;
    selectedCheckerIndex = checker.index;

    // снимаем выделения с шашек для хода
    lightOffCheckers();

    // снимаем выделение с других шашек
    for (let i = 0; i < 12; i++) {
        (checkerColor == 'white' ? whiteCheckers : blackCheckers)[i].id.classList.remove(checkerColor == 'white' ? 'whiteCheckerSelected' : 'blackCheckerSelected');
        (checkerColor == 'white' ? whiteCheckers : blackCheckers)[i].id.classList.remove(checkerColor == 'white' ? 'whiteCheckerSelectedCopm' : 'blackCheckerSelectedCopm');
    }

    // выделяем выбранную шашку
    if (isComputer && (computerColor == currentSide)) { // выходим, если ход компьютера
        // checkerHTML.classList.add((checkerColor == 'white') ? 'whiteCheckerSelected' : 'blackCheckerSelected');
        checkerHTML.classList.add((checkerColor == 'white') ? 'whiteCheckerSelectedCopm' : 'blackCheckerSelectedCopm');
        return;
    }
    console.log('ставим класс выделения шашки');
    checkerHTML.classList.add((checkerColor == 'white') ? 'whiteCheckerSelected' : 'blackCheckerSelected');

    // показываем ходы для шашки
    checker.showMoves();
}

// показать ходы для шашки
checkerObject.prototype.showMoves = function() {
    let checker = this;
    let cellsToMakeMove = [];

    // скрываем ходы других шашек
    if (isHelpOn) {
        for (let i = 0; i < 64; i ++) {
            cells[i].id.classList.remove('cellToMove');
            cells[i].canToMove = false;
        }
    }
    else {
        for (let i = 0; i < 64; i ++) {
            cells[i].canToMove = false;
        }
    }

    // for (let i = 0; i < 64; i ++) {
    //     cells[i].id.classList.remove('cellToMove');
    //     cells[i].canToMove = false;
    // }

    // показываем ходы выбранной шашки
    if (cellsToAttack(checker).length !== 0) { // если шашка атакующая
        // записываем возможные клетки в массив
        cellsToMakeMove = cellsToAttack(checker);

        // подсвечиваем клетки
        if (isHelpOn) {
            for (let i = 0; i < cellsToMakeMove.length; i++) {
                cellsToMakeMove[i].id.classList.add('cellToMove');
                cellsToMakeMove[i].canToMove = true;
            }
        }
        else {
            for (let i = 0; i < cellsToMakeMove.length; i++) {
                cellsToMakeMove[i].canToMove = true;
            }
        }

        // for (let i = 0; i < cellsToMakeMove.length; i++) {
        //     cellsToMakeMove[i].id.classList.add('cellToMove');
        //     cellsToMakeMove[i].canToMove = true;
        // }
    }
    else { // если шашка не атакующая
        // записываем возможные клетки в массив
        cellsToMakeMove = cellsToMoveChecker(checker);

        // подсвечиваем клетки
        if (isHelpOn) {
            for (let i = 0; i < cellsToMakeMove.length; i++) {
                cellsToMakeMove[i].id.classList.add('cellToMove');
                cellsToMakeMove[i].canToMove = true;
            }
        }
        else {
            for (let i = 0; i < cellsToMakeMove.length; i++) {
                cellsToMakeMove[i].canToMove = true;
            }
        }

        // for (let i = 0; i < cellsToMakeMove.length; i++) {
        //     cellsToMakeMove[i].id.classList.add('cellToMove');
        //     cellsToMakeMove[i].canToMove = true;
        // }
    }
}

checkerObject.prototype.changeCoord = function(cell) {
    // записываем координаты
    this.coordX = cell.x;
    this.coordY = cell.y;
    
    // расставляем стили HTML-элементам шашек
    this.id.style.left = this.coordX * cellLength + 'vh';
    this.id.style.top = this.coordY * cellLength + 'vh';

    // чистим старую клетку
    this.cell.checkerIndex = undefined;
    this.cell.checkerColor = undefined;

    // присваиваем клетку
    this.cell = cell;

    // сообщаем клетке её шашку
    cell.checkerIndex = this.index;
    cell.checkerColor = this.color;
}

// создаём шашки
function createCheckers() {
    for (let i = 0; i < 12; i++) {
        // создаём HTML элементы
        const white = document.createElement('div');
        const black = document.createElement('div');
        white.className = 'checker whiteChecker';
        black.className = 'checker blackChecker';

        // добавляем их в документ в поле для шашек
        gameDeck.appendChild(white);
        gameDeck.appendChild(black);
        // checkersArray.appendChild(white);
        // checkersArray.appendChild(black);

        // заполняем массивы
        whiteCheckersHTML[whiteCheckersHTML.length] = white;
        blackCheckersHTML[blackCheckersHTML.length] = black;
    }

    // ищем начальное расположение шашек
    for (let i = 0; i < 8; i++) { // ряды
        for (let j = 0; j < 8; j++) { // столбцы
            // верхние
            if (i < 3) {
                if (((i % 2 == 0) && (j % 2 !== 0)) || ((i % 2 !== 0) && (j % 2 == 0))) {
                    blackCheckersIndexes[blackCheckersIndexes.length] = i * 8 + j;
                }
            }
            // нижние
            if (i > 4) {
                if (((i % 2 == 0) && (j % 2 !== 0)) || ((i % 2 !== 0) && (j % 2 == 0))) {
                    whiteCheckersIndexes[whiteCheckersIndexes.length] = i * 8 + j;
                }
            }
        }
    }

    // создаём объекты для каждой шашки и расставляем их (с учётом выбранной стороны)
    for (let i = 0; i < 12; i++) {
        whiteCheckers[whiteCheckers.length] = new checkerObject(whiteCheckersHTML[i], "white", cells[whiteCheckersIndexes[i]], i);
        blackCheckers[blackCheckers.length] = new checkerObject(blackCheckersHTML[i], "black", cells[blackCheckersIndexes[i]], i);
    }
}











/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////ФУНКЦИИ ДЛЯ ИГРЫ ПРОТИВ КОМПЬЮТЕРА////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function computerMove(alreadyAttackingChecker) {
    // console.log('ходит пк');
    // выходим, если режим игры против компьютера выключен
    if (!isComputer) {
        return;
    }
    // console.log('оп');
    // console.log('computerColor', computerColor);
    // console.log('currentSide', currentSide);
    // выходим, если это не сторона копмьютера или если ходить ему нечем
    if ((computerColor !== currentSide) || ((checkAttackCheckers().length == 0) && (checkMovingCheckers().length == 0))) {
        return;
    }

    // console.log('опана');

    // // отключаем кликабельность
    // bodyElement.style.pointerEvents = 'none';

    // // возвращаем кликабельность
    // setTimeout(function () {
    //     bodyElement.style.pointerEvents = 'unset';
    // }, moveTime);

    // если только что он атаковал шашкой
    if (alreadyAttackingChecker !== undefined) {
        // проверяем атаки для этой шашки
        let tempCellsToAttackArray = cellsToAttack(alreadyAttackingChecker);
        let randomCellIndex = Math.floor(Math.random() * tempCellsToAttackArray.length);
        // случайно выбранная клетка для атаки
        let randomCell = tempCellsToAttackArray[randomCellIndex];

        randomCell.canToMove = true;
        // совершаем ход
        console.log('alreadyAttackingChecker из повторной атаки пк', alreadyAttackingChecker);
        // alreadyAttackingChecker.cell.makeMove(randomCell);

        // массив шашек, ходящих в данный момент
        // let checkers = (currentSide == 'white') ? whiteCheckers : blackCheckers;

        // checkers[selectedCheckerIndex].cell.makeMove()
        alreadyAttackingChecker.selectChecker(alreadyAttackingChecker, alreadyAttackingChecker.id, alreadyAttackingChecker.index, alreadyAttackingChecker.color);

        alreadyAttackingChecker.cell.makeMove(randomCell);
            //         // проверяем, поменялась ли сторона
            // if (computerColor == currentSide) { // сторона не поменялась - ходим еще раз
            //     setTimeout(function () {
            //         computerMove(alreadyAttackingChecker);
            //     }, moveTime);
            // }


        ////////////////////////////////

        // let checkerMoreAttackCells = [];


        // // чтобы сьесть как можно больше шашек одним ходом
        // // меняем сторону
        // currentSide = (currentSide == 'white' ? 'black' : 'white');

        //     // текущая шашка
        //     let tempChecker = alreadyAttackingChecker;
        //     // индекс шашки
        //     let tempStartCellIndex = tempChecker.index;

        //     // начальная клетка шашки
        //     let tempStartCell = tempChecker.cell;

        //     // массив ходов этой шашки
        //     let tempMoveCellsArray = cellsToAttack(tempChecker);

        //     // убираем ocupied старой клетке
        //     tempStartCell.ocupied = 'no';

        //     // каждый ход шашки
        //     for (let j = 0; j < tempMoveCellsArray.length; j++) {
        //         // console.log('оп, проверка обычного хода компьютера');

        //         // клетка для хода
        //         let tempCellToMove = tempMoveCellsArray[j];
        //         // индекс клетки для хода
        //         let tempCellToMoveIndex = tempCellToMove.index;

        //         // добавляем ocupied новой клетке
        //         tempCellToMove.ocupied = computerColor;

        //         // проверяем, едят ли нас следующим ходом
        //         if (checkAttackCheckers().length == 0) {
        //             // если не было создано поля шашки - создаём его
        //             if (checkerMoreAttackCells[tempStartCellIndex] == undefined) {
        //                 checkerMoreAttackCells[tempStartCellIndex] = [];
        //             }
        //             // если нас не едят - ход безопасный и мы его записываем
        //             checkerMoreAttackCells[tempStartCellIndex].push(tempCellToMoveIndex);
        //         }

        //         // убираем ocupied новой клетке
        //         tempCellToMove.ocupied = 'no';
        //     }

        //     // добавляем ocupied старой клетке
        //     tempStartCell.ocupied = computerColor;

        // // меняем сторону обратно
        // currentSide = (currentSide == 'white' ? 'black' : 'white');


        ////////////////////////////



    }
    // console.log('ходит компьютер, его цвет ', computerColor, ' = ', currentSide);
    // computerColor

    // сторона компьютера на момент начала хода
    // let tempSide = currentSide;

    // создаём копии поля и шашек
    // reservCells = Array.from(cells);
    // reservWhiteCheckers = Array.from(whiteCheckers);
    // reservBlackCheckers = Array.from(blackCheckers);
    // console.log('копии массивов: reservCells, reservWhiteCheckers, reservBlackCheckers ', reservCells, reservWhiteCheckers, reservBlackCheckers);

    // массив возможных шашек и их ходов
    // let probableArray = [];

    // если это первый ход в цепочке, проверяем, есть ли атакующие шашки
    else {
        if (checkAttackCheckers().length !== 0) {
            // атакующие шашки
            let tempAttackCheckersArray = checkAttackCheckers();

            let randomCheckerIndex = Math.floor(Math.random() * tempAttackCheckersArray.length);

            // случайно выбранная шашка
            let randomChecker = tempAttackCheckersArray[randomCheckerIndex];
            // выбираем шашку
            randomChecker.selectChecker(randomChecker, randomChecker.id, randomChecker.index, randomChecker.color);

            // ходы атакующей шашки
            let tempCellsToAttackArray = cellsToAttack(randomChecker);

            let randomCellIndex = Math.floor(Math.random() * tempCellsToAttackArray.length);

            // случайно выбранная клетка для атаки
            let randomCell = tempCellsToAttackArray[randomCellIndex];

            randomCell.canToMove = true;

            // совершаем ход
            randomChecker.cell.makeMove(randomCell);

            // проверяем, поменялась ли сторона
            // if (computerColor == currentSide) { // сторона не поменялась - ходим еще раз
            //     setTimeout(function () {
            //         computerMove(randomChecker);
            //     }, moveTime);
            // }

        }
        // если атакующих шашек нет
        else {
            console.log('пк ищет шашки для обычного хода');
            // ходящие шашки
            let tempMovingCheckersArray = checkMovingCheckers();

            // объект безобасных ходов - пар 'шашка - клетка для хода'
            let checkerAndCellSavePairs = {};

            // если включен режим 'посложнее'
            if (isHardLevel) {
                // проходимся по каждому ходу каждой шашки и выбираем те, после которых нас не смогут съесть следующим же ходом
                // далее из них выбираем случайный

                // меняем сторону
                currentSide = (currentSide == 'white' ? 'black' : 'white');

                // каджая шашка
                for (let i = 0; i < tempMovingCheckersArray.length; i++) {
                    // текущая шашка
                    let tempChecker = tempMovingCheckersArray[i];
                    // индекс шашки
                    let tempStartCellIndex = tempChecker.index;

                    // начальная клетка шашки
                    let tempStartCell = tempChecker.cell;

                    // массив ходов этой шашки
                    let tempMoveCellsArray = cellsToMoveChecker(tempChecker);

                    // убираем ocupied старой клетке
                    tempStartCell.ocupied = 'no';

                    // каждый ход шашки
                    for (let j = 0; j < tempMoveCellsArray.length; j++) {
                        // клетка для хода
                        let tempCellToMove = tempMoveCellsArray[j];
                        // индекс клетки для хода
                        let tempCellToMoveIndex = tempCellToMove.index;

                        // добавляем ocupied новой клетке
                        tempCellToMove.ocupied = computerColor;

                        // проверяем, едят ли нас следующим ходом
                        if (checkAttackCheckers().length == 0) {
                            // если не было создано поля шашки - создаём его
                            if (checkerAndCellSavePairs[tempStartCellIndex] == undefined) {
                                checkerAndCellSavePairs[tempStartCellIndex] = [];
                            }
                            // если нас не едят - ход безопасный и мы его записываем
                            checkerAndCellSavePairs[tempStartCellIndex].push(tempCellToMoveIndex);
                        }

                        // убираем ocupied новой клетке
                        tempCellToMove.ocupied = 'no';
                    }

                    // добавляем ocupied старой клетке
                    tempStartCell.ocupied = computerColor;
                }
                // меняем сторону обратно
                currentSide = (currentSide == 'white' ? 'black' : 'white');
            }

            // делаем ход, случайно выбрав шашку и её клетку для хода из объекта
            if (Object.keys(checkerAndCellSavePairs).length > 0) {
                console.log('массив безопасных ходов не пуст');
                let allFindedCheckersIndexes = Object.keys(checkerAndCellSavePairs);

                // Выбираем случайное поле объекта - шашку
                let finalCheckerIndex = allFindedCheckersIndexes[Math.floor(Math.random() * allFindedCheckersIndexes.length)];

                // индекс клетки для хода этой шашкой
                let finalCellIndexes = checkerAndCellSavePairs[finalCheckerIndex];
                let finalCellIndex = finalCellIndexes[Math.floor(Math.random() * finalCellIndexes.length)];

                // делаем ход
                // шашка
                let currentCheckersArray = (currentSide == 'white' ? whiteCheckers : blackCheckers);
                let finalChecker = currentCheckersArray[finalCheckerIndex];

                // клетка
                let finalcell = cells[finalCellIndex];
                // новая клетка
                
                // выбираем шашку
                finalChecker.selectChecker(finalChecker, finalChecker.id, finalChecker.index, finalChecker.color);
                finalcell.canToMove = true;
                // передвигаем шашку
                finalChecker.cell.makeMove(finalcell);
            }
            // если объект пустой - делаем случайный ход
            else {
                console.log('массив безопасных ходов пуст');
                let randomCheckerIndex = Math.floor(Math.random() * tempMovingCheckersArray.length);
        
                // случайно выбранная шашка
                let randomChecker = tempMovingCheckersArray[randomCheckerIndex];
                // выбираем шашку
                randomChecker.selectChecker(randomChecker, randomChecker.id, randomChecker.index, randomChecker.color);
        
                // ходы ходящей шашки
                let tempCellsToMoveArray = cellsToMoveChecker(randomChecker);
        
                let randomCellIndex = Math.floor(Math.random() * tempCellsToMoveArray.length);
        
                // случайно выбранная клетка для атаки
                let randomCell = tempCellsToMoveArray[randomCellIndex];
                randomCell.canToMove = true;
        
                // совершаем ход
                console.log('шашка для пк хода randomChecker', randomChecker);
                console.log('клетка для пк хода randomCell', randomCell);
                randomChecker.cell.makeMove(randomCell);
            }
            // после хода чистим массив
            checkerAndCellSavePairs = {};
        }
    }
}









/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ/////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////ПРОВЕРКА АТАКУЮЩИХ ХОДОВ////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


// проверка атакующих шашек
function checkAttackCheckers() {
    let checkers = (currentSide == 'white') ? whiteCheckers : blackCheckers;

    let attackCheckers = [];

    // проверяем каждую шашку
    for (let i = 0; i < 12; i++) {
        if (checkers[i].alive == true) { // если шашка на поле
            if (cellsToAttack(checkers[i]).length !== 0) { // если шашка подходит, записываем ее в массив
                attackCheckers[attackCheckers.length] = checkers[i];
            }
        }
    }
    return attackCheckers;
}

// проверка обязательных ходов (атак) для одной шашки (на выходе массив из клеток)
function cellsToAttack(checker) {
    let tempAttackCells = [];
    let opositeSide = (currentSide == 'white' ? 'black' : 'white');
    let startCell = checker.cell;
    let startCellIndex = checker.cell.index;
    // обычная шашка
    if (!checker.king) {
            // для атак наверх
            if (startCellIndex > 15) { // если шашка не сверху
                // левая сторона
                if (startCellIndex % 8 > 1) { // если шашка не близко к краю
                    if (cells[startCellIndex - 9].ocupied == opositeSide) { // если рядом стоит шашка противника
                        if (cells[startCellIndex - 18].ocupied == 'no') { // если конечная клетка пуста
                            tempAttackCells[tempAttackCells.length] = cells[startCellIndex - 18];
                        }
                    }
                }
                // правая сторона
                if (startCellIndex % 8 < 6) { // если шашка не близко к краю
                    if (cells[startCellIndex - 7].ocupied == opositeSide) { // если рядом стоит шашка противника
                        if (cells[startCellIndex - 14].ocupied == 'no') { // если конечная клетка пуста
                            tempAttackCells[tempAttackCells.length] = cells[startCellIndex - 14];
                        }
                    }
                }
            }
            // для атак вниз
            if (startCellIndex < 48) { // если шашка не снизу
                // левая сторона
                if (startCellIndex % 8 > 1) { // если шашка не близко к краю
                    if (cells[startCellIndex + 7].ocupied == opositeSide) { // если рядом стоит шашка противника
                        if (cells[startCellIndex + 14].ocupied == 'no') { // если конечная клетка пуста
                            tempAttackCells[tempAttackCells.length] = cells[startCellIndex + 14];
                        }
                    }
                }
                // правая сторона
                if (startCellIndex % 8 < 6) { // если шашка не близко к краю
                    if (cells[startCellIndex + 9].ocupied == opositeSide) { // если рядом стоит шашка противника
                        if (cells[startCellIndex + 18].ocupied == 'no') { // если конечная клетка пуста
                            tempAttackCells[tempAttackCells.length] = cells[startCellIndex + 18];
                        }
                    }
                }
            }
        // }
    }
    // дамка
    else {
        // лево верх
        if ((startCell.x > 1) && (startCell.y > 1)) { // если шашка не близко к краям
            let cellsCount = (startCell.x > startCell.y ? startCell.y : startCell.x);
            let directionStep = -9;
            tempAttackCells.push(...checkKingAttackCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // право верх
        if ((startCell.x < 6) && (startCell.y > 1)) { // если шашка не близко к краям
            let cellsCount = ((7 - startCell.x) > startCell.y ? startCell.y : (7 - startCell.x));
            let directionStep = -7;
            tempAttackCells.push(...checkKingAttackCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // право низ
        if ((startCell.x < 6) && (startCell.y < 6)) { // если шашка не близко к краям
            let cellsCount = ((7 - startCell.x) > (7 - startCell.y) ? (7 - startCell.y) : (7 - startCell.x));
            let directionStep = 9;
            tempAttackCells.push(...checkKingAttackCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // лево низ
        if ((startCell.x > 1) && (startCell.y < 6)) { // если шашка не близко к краям
            let cellsCount = (startCell.x > (7 -startCell.y) ? (7 -startCell.y) : startCell.x);
            let directionStep = 7;
            tempAttackCells.push(...checkKingAttackCells(startCell, cellsCount, directionStep, opositeSide));
        }
    }

    return tempAttackCells;
}

// проверка атак дамки (для одного направления)
function checkKingAttackCells(startCell, cellsCount, directionStep, opositeSide) {
    let isOponentFound = false;
    let tempArray = [];

    // проходимся по клеткам в этом направлении
    for (let i = 1; i <= cellsCount; i++) {
        let currentCell = cells[(startCell.x + startCell.y * 8) + (directionStep * i)];

        // если клетка наша - выходим
        if (currentCell.ocupied == currentSide) break;
        // если клетка чужая - записываем метку
        if (currentCell.ocupied == opositeSide) {
            // если чужая уже была - выходим
            if (isOponentFound) break;
            else {
                isOponentFound = true;
            }
        }
        // если клетка пустая - проверяем на найденого опонента
        if (currentCell.ocupied == 'no') {
            // если опонент уже найден - записываем клетку
            if (isOponentFound) {
                tempArray[tempArray.length] = currentCell;
            }
        }
        // если клетка битая - выходим
        if (currentCell.ocupied == 'bited') {
            break;
        }
    }

    return tempArray;
}






/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////ПРОВЕРКА ОБЫЧНЫХ ХОДОВ//////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// проверка ходящих шашек
function checkMovingCheckers() {
    let checkers = (currentSide == 'white') ? whiteCheckers : blackCheckers;

    let movingCheckers = [];

    // проверяем каждую шашку
    for (let i = 0; i < 12; i++) {
        if (checkers[i].alive == true) { // если шашка на поле
            if (cellsToMoveChecker(checkers[i]).length !== 0) { // если шашка подходит, записываем ее в массив
                movingCheckers[movingCheckers.length] = checkers[i];
            }
        }
    }
    return movingCheckers;
}

// проверка обычных ходов для шашки (на выходе массив из клеток)
function cellsToMoveChecker(checker) {
    let tempCellsToMove = [];
    let opositeSide = (currentSide == 'white' ? 'black' : 'white');
    let startCellIndex = checker.cell.index;
    let startCell = checker.cell;

    // для обычых шашек
    if (!checker.king) {
        // для нижних шашек
        if (checker.isMainSide) {
            if (startCellIndex > 7) { // если шашка не сверху
                // левая сторона
                if (startCellIndex % 8 > 0) { // если шашка не близко к краю
                    if (cells[startCellIndex - 9].ocupied == 'no') { // если клетка пустая
                        tempCellsToMove[tempCellsToMove.length] = cells[startCellIndex - 9]; // записываем клетку в массив
                    }
                }
                // правая сторона
                if (startCellIndex % 8 < 7) { // если шашка не близко к краю
                    if (cells[startCellIndex - 7].ocupied == 'no') { // если клетка пустая
                        tempCellsToMove[tempCellsToMove.length] = cells[startCellIndex - 7]; // записываем клетку в массив
                    }
                }
            }
        }
        // для верхних шашек
        else {
            if (startCellIndex < 56) { // если шашка не сверху
                // левая сторона
                if (startCellIndex % 8 > 0) { // если шашка не близко к краю
                    if (cells[startCellIndex + 7].ocupied == 'no') { // если клетка пустая
                        tempCellsToMove[tempCellsToMove.length] = cells[startCellIndex + 7]; // записываем клетку в массив
                    }
                }
                // правая сторона
                if (startCellIndex % 8 < 7) { // если шашка не близко к краю
                    if (cells[startCellIndex + 9].ocupied == 'no') { // если клетка пустая
                        tempCellsToMove[tempCellsToMove.length] = cells[startCellIndex + 9]; // записываем клетку в массив
                    }
                }
            }
        }
    }
    else { // дамка
        // лево верх
        if ((startCell.x > 0) && (startCell.y > 0)) { // если шашка не близко к краям
            let cellsCount = (startCell.x > startCell.y ? startCell.y : startCell.x);
            let directionStep = -9;
            tempCellsToMove.push(...checkKingMoveCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // право верх
        if ((startCell.x < 7) && (startCell.y > 0)) { // если шашка не близко к краям
            let cellsCount = ((7 - startCell.x) > startCell.y ? startCell.y : (7 - startCell.x));
            let directionStep = -7;
            tempCellsToMove.push(...checkKingMoveCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // право низ
        if ((startCell.x < 7) && (startCell.y < 7)) { // если шашка не близко к краям
            let cellsCount = ((7 - startCell.x) > (7 - startCell.y) ? (7 - startCell.y) : (7 - startCell.x));
            let directionStep = 9;
            tempCellsToMove.push(...checkKingMoveCells(startCell, cellsCount, directionStep, opositeSide));
        }
        // лево низ
        if ((startCell.x > 0) && (startCell.y < 7)) { // если шашка не близко к краям
            let cellsCount = (startCell.x > (7 - startCell.y) ? (7 - startCell.y) : startCell.x);
            let directionStep = 7;
            tempCellsToMove.push(...checkKingMoveCells(startCell, cellsCount, directionStep, opositeSide));
        }
    }

    return tempCellsToMove;
}


// проверка обычных ходов дамки (для одного направления)
function checkKingMoveCells(startCell, cellsCount, directionStep, opositeSide) {
    let isOponentFound = false;
    let writedCellsCount = 0;
    let tempCellsArray = [];

    // проходимся по клеткам в этом направлении
    for (let i = 1; i <= cellsCount; i++) {
        let currentCell = cells[(startCell.x + startCell.y * 8) + (directionStep * i)];

        // если клетка чужая
        if ((currentCell.ocupied == opositeSide) || (currentCell.ocupied == 'bited')) {
            // маркируем
            if (!isOponentFound) {
                isOponentFound = true;
            }
            // если она не первая - выходим
            else {
                break
            }
        }

        // если клетка наша - выходим
        if (currentCell.ocupied == currentSide) break;

        // если клетка пустая - проверяем
        if (currentCell.ocupied == 'no') {
            // если чужой не было
            if (!isOponentFound) {
                tempCellsArray[tempCellsArray.length] = currentCell;;
                writedCellsCount ++;
            }
            // если была - это атака
            else {
                // чистим массив
                for (let i = 0; i < writedCellsCount; i++) {
                    tempCellsArray.pop();
                }

                // выходим
                isOponentFound = true;
                break;
            }
        }
    }

    return tempCellsArray;
}







/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////ЧИСТИМ ШАШКИ И КЛЕТКИ ПОСЛЕ АТАКИ/////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// чистим шашки, съеденые за один ход, и их клетки
function clearBitedItems(arrayOfBitedCheckers, side) {
console.log('цвет съеденых шашек ', side);

    let bitedCount = arrayOfBitedCheckers.length;

    for (let i = 0; i < arrayOfBitedCheckers.length; i++) {
        // убираем шашку
        arrayOfBitedCheckers[i].alive = false;
        arrayOfBitedCheckers[i].id.style.display = 'none';

        // чистим клетку
        arrayOfBitedCheckers[i].cell.ocupied = 'no'; 
        arrayOfBitedCheckers[i].cell.checkerColor = undefined;
    }

    console.log('side', side);

    // сообщаем переменной, что шашек стало меньше
    if (side == 'white') {
        aliveWhiteCount -= bitedCount;

        // проверка на отсутствие шашек
        if (aliveWhiteCount <= 0) {
            gameEnd('outOfWhiteCheckers');
            return true;
        }
    }
    if (side == 'black') {
        aliveBlackCount -= bitedCount;

        // проверка на отсутствие шашек
        if (aliveBlackCount <= 0) {
            gameEnd('outOfBlackCheckers');
            return true;
        }
    }

    console.log('aliveWhiteCount', aliveWhiteCount);
    console.log('aliveBlackCount', aliveBlackCount);

    return false;
}











// подсветка шашек, доступных для хода
function lightOnCheckers() {
    if (!isHelpOn) {
        return;
    }

    console.log('computerColor', computerColor);
    console.log('currentSide', currentSide);

    if (isComputer && (computerColor == currentSide)) { // выходим, если ход компьютера
        return;
    }

    // console.log('подсветка');

    let checkersClass = (currentSide == 'white' ? 'riteWhiteCheckerToAttack' : 'riteBlackCheckerToAttack');

    let tempAttackCheckersArray = checkAttackCheckers();
    let tempMovingCheckersArray = checkMovingCheckers();

    if (tempAttackCheckersArray.length == 1) {
        tempAttackCheckersArray[0].selectChecker(tempAttackCheckersArray[0], tempAttackCheckersArray[0].id, tempAttackCheckersArray[0].index, tempAttackCheckersArray[0].color);
        return;
    }
    if (tempMovingCheckersArray.length == 1) {
        tempMovingCheckersArray[0].selectChecker(tempAttackCheckersArray[0], tempAttackCheckersArray[0].id, tempAttackCheckersArray[0].index, tempAttackCheckersArray[0].color);
        return;
    }

    if (tempAttackCheckersArray.length !== 0) { // если есть атакующие
        for (let i = 0; i < tempAttackCheckersArray.length; i++) {
            tempAttackCheckersArray[i].id.classList.add(checkersClass);
        }
    }
    else if (tempMovingCheckersArray.length !== 0) {
        for (let i = 0; i < tempMovingCheckersArray.length; i++) {
            tempMovingCheckersArray[i].id.classList.add(checkersClass);
        }
    }
}

function lightOffCheckers() {
    if ((computerColor == currentSide) && isComputer) {
        return;
    }
    if (!isHelpOn) {
        return;
    }

    let tempcheckersArrayToRemoveSelect = (currentSide == 'white' ? whiteCheckers : blackCheckers);
    let checkersClassRemoving = (currentSide == 'white' ? 'riteWhiteCheckerToAttack' : 'riteBlackCheckerToAttack');

    for (let i = 0; i < 12; i++) {
        tempcheckersArrayToRemoveSelect[i].id.classList.remove(checkersClassRemoving);
    }

    // if (tempAttackCheckersArray.length !== 0) { // если есть атакующие
    //     for (let i = 0; i < tempAttackCheckersArray.length; i++) {
    //         tempAttackCheckersArray[i].id.classList.add(checkersClass);
    //     }
    // }
    // else if (tempMovingCheckersArray.length !== 0) {
    //     for (let i = 0; i < tempMovingCheckersArray.length; i++) {
    //         tempMovingCheckersArray[i].id.classList.add(checkersClass);
    //     }
    // }
}






/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////ПРОВЕРКА КОНЦА ИГРЫ////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// проверяем шашки соперника на обездвиженность
function checkOutOfMoves() {
        // если нет шашек которые могут атаковать или ходить
        if ((checkAttackCheckers().length == 0) && (checkMovingCheckers().length == 0)) {
            setTimeout(function () {
                gameEnd('outOfMoves');
            }, moveTime * 0.5);
            return true;
        }
        else {
            return false;
        }
}


// конец игры
function gameEnd(reason) {
    setTimeout(function () {

        function whoWins(who) {
            resultTitlecompWins.style.display = 'none';
            resultTitleplayerWins.style.display = 'none';
            // resultTitleupPlayerWins.style.display = 'none';
            // resultTitledownPlayerWins.style.display = 'none';
            resultTitleWhite.style.display = 'none'
            resultTitleBlack.style.display = 'none'
            resultTitleNoOne.style.display = 'none'

            who.style.display = 'unset';
        }

        console.log('игра окончена');
        if ((reason == 'outOfWhiteCheckers') || (reason == 'outOfBlackCheckers')) { // если закончились шашки
            if (isComputer) { // игра против пк
                if (currentSide == computerColor) { // комп проиграл
                    whoWins(resultTitleplayerWins);
                }
                else {
                    whoWins(resultTitlecompWins);
                }
            }
            else { // игра 1 на 1
                // if ((!invertSide) && (currentSide == 'black') || (invertSide) && (currentSide == 'white')) { // если выиграл нижний игрок (если поле не инвертированно и выиграли белые)
                if (currentSide !== 'white') {
                    whoWins(resultTitleWhite);
                }
                else {
                    whoWins(resultTitleBlack);
                }
            }
        }
        // else if (reason == 'giveUp') {
        //     console.log('вы сдались');

        //     // gameEndTitleInner.innerHTML = 'вы сдались';
        // }
        else if (reason == 'outOfMoves') { // если закончились ходы
            console.log('закончились ходы у стороны ', currentSide);
            if (isComputer) { // игра против пк
                if (currentSide == computerColor) { // комп проиграл
                    whoWins(resultTitleplayerWins);
                }
                else {
                    whoWins(resultTitlecompWins);
                }
            }
            else { // игра 1 на 1
                // if ((!invertSide) && (currentSide == 'black') || (invertSide) && (currentSide == 'white')) { // если выиграл нижний игрок (если поле не инвертированно и выиграли белые)
                if (currentSide !== 'white') {
                    whoWins(resultTitleWhite);
                }
                else {
                    whoWins(resultTitleBlack);
                }
            }
        }
        else if (reason == 'ничья 15 ходов дамками без взятий') {
            console.log(reason);

            whoWins(resultTitleNoOne);
        }

        // обновляем счёт по партиям
        // (включена сторона проигравшего)

        // если игра против пк
        // if (isComputer) {
        //     // если выиграл игрок
        //     if (currentSide == computerColor) {
        //         playerCompScore++;
                
        //         // if ()
        //         whiteScoreInner.innerHTML = 
        //         blackScoreInner


        //         console.log('игрок выиграл у компьютера');
        //         console.log('цвет победителя: ', (currentSide == 'white' ? 'black' : 'white'));
        //     }
        //     // если выиграл компьютер
        //     else {
        //         compCompScore++;

        //         console.log('компьютер выиграл у игрока');
        //         console.log('цвет победителя: ', (currentSide == 'white' ? 'black' : 'white'));
        //     }
        // }
        // // если игра один на один
        // else {
        //     // если выиграли белые
        //     if (currentSide == 'white') {
        //         downPvpScore++;

        //         console.log('игрок с черными выиграл игрока с белыми');
        //     }
        //     // если выиграли черные
        //     else {
        //         upPvpScore++;
                
        //         console.log('игрок с белыми выиграл игрока с черными');
        //     }
        // }

        // показываем окно результатов
        gameEndModal.classList.remove('displaynoneElement');
        // menu.style.display = 'flex'
        setTimeout(function () {
            gameEndModal.classList.remove('hiddenElement');
            // menu.style.display = 'flex'
        }, 1);

        // gameEndModal.style.display = 'flex';
        // gameEndModal.style.opacity = '1';
    }, moveTime * 0.99);
}






/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////РЕСТАРТ ИГРЫ////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function restartGame(reason) {
                        // если партия завершилась естественным образом (выигрэш или ничья)
                        if (reason == 'end') {
                            // меняем стороны если игра против пк
                            if (isComputer) {
                                console.log('рестарт против пк');
                                isPlayerMain = (isPlayerMain == false ? true : false);
                                invertSide = (invertSide == false ? true : false);
                                computerColor = (computerColor == 'black' ? 'white' : 'black');
                            }
                            // если игра один на один - переворачиваем поле
                            else {
                                invertSide = (invertSide == false ? true : false);
                                console.log('рестарт один на один');
                            }
                        }
                    
                        // чистим переменные
                        setSideColorInner('white');
                        currentSide = 'white';
                        isCheckerSelected = false;
                        aliveWhiteCount = 12;
                        aliveBlackCount = 12;
                    
                        console.log('перед перпезапуском currentSide ', currentSide);
                        console.log('перед перпезапуском computerColor ', computerColor);
                    
                        // чистим поле и расставляем шашки заново
                        cells = [];
                        cellsHTML = [];
                        whiteCheckers = [];
                        whiteCheckersHTML = [];
                        blackCheckers = [];
                        blackCheckersHTML = [];
                    
                        gameDeck.innerHTML = '';
                    
                        setTimeout(function () {
                            gameEndModal.classList.add('displaynoneElement');
                            // menu.style.display = 'none'
                        }, opacityTime);
                        menu.classList.add('hiddenElement');
                    
                        // запускаем игру
                        reason == 'end' ? startGame('end') : startGame();
    
        // реклама
        if (isAdd == true) {
            // флажок
            isAdd = false;
        
            // setTimeout(function () {
            // показываем рекламу с задержкой
            console.log('начинается реклама');
            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: function (wasShown) { // по закрытию рекламы
                        // запускаем счетчик до следующей рекламы
                    add60Timer();
                    }
                },
            });
        }
}





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////ВЫХОД В МЕНЮ////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function navToMenu(isResult) {
    // сбрасываем переменные
    // invertSide = originalnvertSide;
    setSideColorInner('white');
    currentSide = 'white';
    isCheckerSelected = false;
    aliveWhiteCount = 12;
    aliveBlackCount = 12;

    // computerColor = (computerColor == 'black' ? 'white' : 'black');

    console.log('перед перпезапуском currentSide ', currentSide);
    console.log('перед перпезапуском computerColor ', computerColor);

    // чистим поле и расставляем шашки заново
    cells = [];
    cellsHTML = [];
    whiteCheckers = [];
    whiteCheckersHTML = [];
    blackCheckers = [];
    blackCheckersHTML = [];

    // если выходим из окна результатов
    if (isResult) {
        // скрываем результаты
        setTimeout(function () {
            gameEndModal.style.display = 'none';
        }, opacityTime);
        gameEndModal.style.opacity = '0';

        gameDeck.innerHTML = '';
    }
    else {
        setTimeout(function () {
            gameDeck.innerHTML = '';
        }, opacityTime);
    }

    // показываем меню
    menu.classList.remove('displaynoneElement');
    // menu.style.display = 'flex'
    setTimeout(function () {
        menu.classList.remove('hiddenElement');
        // menu.style.display = 'flex'
    }, 1);
}









/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////ЗАПУСКАЕМ ИГРУ//////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function startGame(target) {
    // invertSide = pclnvertSide;

    if (isComputer) { // игра против пк
        if (target == 'fromMenu') { // первая игра в серии
            invertSide = pclnvertSide;
        }
        else if (target == 'end') { // следующая игра в серии
            console.log('сторону уже поменяли, она ', invertSide);
        }
        else { // рестарт
            console.log('сторону не меняем, она ', invertSide);
        }
    }
    else { // игра  1 на 1
        if (target == 'fromMenu') { // первая игра в серии
            invertSide = false;
            console.log('сторону ставим на false, она ', invertSide);
        }
        else if (target == 'end') { // следующая игра в серии
            console.log('сторону уже поменяли, она ', invertSide);
        }
        else { // рестарт
            console.log('сторону не меняем, она ', invertSide);
        }
    }

    // рисуем поле
    createOriginalField()
    createCheckers()

    // если поле инвертированно - добавляем класс
    if (invertSide == true) {
        checkersArray.classList.add('rotateField');
        gameDeck.classList.add('rotateField');
        for (let i = 0; i < 12; i++) {
            whiteCheckers[i].id.classList.add('rotateField');
            blackCheckers[i].id.classList.add('rotateField');
        }
    }
    else {
        checkersArray.classList.remove('rotateField');
        gameDeck.classList.remove('rotateField');
        for (let i = 0; i < 12; i++) {
            whiteCheckers[i].id.classList.remove('rotateField');
            blackCheckers[i].id.classList.remove('rotateField');
        }

        // console.log('возвращаем белые вниз')
    }

    // подсвечиваем шашки
    lightOnCheckers();

    // скрываем меню
    setTimeout(function () {
        menu.classList.add('displaynoneElement');
        // menu.style.display = 'none'
    }, opacityTime);
    menu.classList.add('hiddenElement');

    // ходит комп, если он начинает
    if (isComputer && !isPlayerMain) {
        setTimeout(function () {
            console.log('пк начинает');
            computerMove();
        }, moveTime)
    }
}