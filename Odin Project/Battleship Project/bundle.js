(() => { 
	var __webpack_modules__ = ({

"./src/components/attack.js":

((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/game.js");
 var _gameSetUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/gameSetUp.js");



function checkPlayerWin() {
    let boardR = document.querySelector('#boardR');
    let squaresR = boardR.querySelectorAll('.squareHidden');
    for (let i = 0; i < squaresR.length; i++) {
        if (squaresR[i].innerHTML == "s") {
            return false;
        }
    }
    return true;
};

function checkCompWin() {
    let boardL = document.querySelector('#boardL');
    let squaresL = boardL.querySelectorAll('#playerSquare');
    let compWin = false;
    for (let i = 0; i < squaresL.length; i++) {
        if (squaresL[i].innerHTML == "s") {
            return false;
        }
    }
    return true;
}

function gameOver(string) {
    let gameDiv = document.querySelector('.gameDiv');
    let boardDiv = document.querySelector('.boardDiv');
    let tagDiv = document.querySelector('.tagDiv');
    tagDiv.remove();
    boardDiv.remove();

    let winDiv = document.createElement('div');
    winDiv.className = 'winDiv';
    winDiv.innerHTML = string;
    gameDiv.appendChild(winDiv);

    const restartButton = document.createElement('button');
    winDiv.appendChild(restartButton);
    restartButton.className = "restartButton";
    restartButton.innerHTML = "Play Again?";
    restartButton.addEventListener('click', () => {
        let iconDiv = document.querySelector('.iconDiv');
        iconDiv.remove();
        gameDiv.remove();
        (0,_gameSetUp__WEBPACK_IMPORTED_MODULE_1__.default)();
        (0,_game__WEBPACK_IMPORTED_MODULE_0__.default)();
    })
}

function compMove() {
    let boardL = document.querySelector('#boardL');
    let squaresL = boardL.querySelectorAll('#playerSquare');
    let i = Math.floor(Math.random() * squaresL.length);
    if (squaresL[i].className == "squareHidden" || squaresL[i].className == "squarePlayerShip") {
        if (squaresL[i].innerHTML == "~") {
            squaresL[i].className = "squareMiss";
            squaresL[i].innerHTML = "";
        }
        else if (squaresL[i].innerHTML == "s") {
            squaresL[i].className = "squareHit";
            squaresL[i].innerHTML = "";
        }
    }
    else {
        compMove();
    }
    let compWin = checkCompWin();
    if (compWin == true) {
        gameOver('You let a computer I programmed beat you. SMH.')
    }
};

function userAttack() {
    if (this.innerHTML == '~') {
        this.className = "squareMiss";
        this.innerHTML = "";
    }
    else if (this.innerHTML == 's') {
        this.className = "squareHit";
        this.innerHTML = '';
    }
    let huWin = checkPlayerWin();
    if (huWin == false) {
        compMove();
    }
    else if(huWin == true) {
        gameOver('You Win!');
    }

}

function attackInit() {
    let boardR = document.querySelector('#boardR');
    let squares = boardR.querySelectorAll('.squareHidden');
    squares.forEach(square => square.addEventListener('click', userAttack));
}


 const __WEBPACK_DEFAULT_EXPORT__ = (attackInit);

 }),

"./src/components/game.js":

((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/gameboard/gameboard.js");
 var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default =__webpack_require__.n(_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__);
 var _ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/ship/ship.js");
 var _ship_ship__WEBPACK_IMPORTED_MODULE_1___default =__webpack_require__.n(_ship_ship__WEBPACK_IMPORTED_MODULE_1__);
 var _attack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/attack.js");




function playerInit() {
    return _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('human');
}

function compInit() {
    return _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('computer');
}

function shipsInit(player) {
    if (player.player == 'human') {
        let randomNum1 = Math.floor(Math.random() * (4 - 1) + 1);
        const ship1 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(1, 2, true);
        const ship2 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(2, 3, false);
        const ship3 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(3, 4, true);
        const ship4 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(4, 4, false);
        const ship5 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(5, 3, true);
        switch(randomNum1) {
            case 1:
                player.placeShip(ship1, 0);
                player.placeShip(ship2, 27);
                player.placeShip(ship3, 41);
                player.placeShip(ship4, 35);
                player.placeShip(ship5, 3);
                break;
            case 2:
                player.placeShip(ship1, 89);
                player.placeShip(ship2, 3);
                player.placeShip(ship3, 30);
                player.placeShip(ship4, 67);
                player.placeShip(ship5, 72);
                break;
            case 3:
                player.placeShip(ship1, 9);
                player.placeShip(ship2, 44);
                player.placeShip(ship3, 28);
                player.placeShip(ship4, 61);
                player.placeShip(ship5, 70);
                break;
        }
    }
    if (player.player == 'computer') {
        let randomNum2 = Math.floor(Math.random() * (4 - 1) + 1);
        const cuship1 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(1, 2, true);
        const cuship2 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(2, 3, false);
        const cuship3 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(3, 4, true);
        const cuship4 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(4, 4, false);
        const cuship5 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(5, 3, true);
        switch(randomNum2) {
            case 1: 
                player.placeShip(cuship1, 13);
                player.placeShip(cuship2, 54);
                player.placeShip(cuship3, 69);
                player.placeShip(cuship4, 93);
                player.placeShip(cuship5, 0);
                break;

            case 2:
                player.placeShip(cuship1, 89);
                player.placeShip(cuship2, 90);
                player.placeShip(cuship3, 66);
                player.placeShip(cuship4, 14);
                player.placeShip(cuship5, 32);
                break;
            case 3:
                player.placeShip(cuship1, 50);
                player.placeShip(cuship2, 94);
                player.placeShip(cuship3, 38);
                player.placeShip(cuship4, 72);
                player.placeShip(cuship5, 6);
                break;
        }
        
    }
};



function gameInit(player) {
    if (player.player == 'human') {
        shipsInit(player);
        const boardL = document.querySelector('#boardL');
        for (let i = 0; i < player.board.length; i++) {
            let square = document.createElement('div');
            square.id = 'playerSquare';
            square.innerHTML = player.board[i];
            if (square.innerHTML == "s") {
                square.className = 'squarePlayerShip';
            }
            else {
                square.className = 'squareHidden';
            }
            boardL.appendChild(square);
        }
    }
    else if (player.player == 'computer') {
        shipsInit(player);
        const boardR = document.querySelector('#boardR');
        for (let i = 0; i < player.board.length; i++) {
            let square = document.createElement('div');
            square.innerHTML = player.board[i];
            square.className = 'squareHidden';
            boardR.appendChild(square);
        }
        (0,_attack__WEBPACK_IMPORTED_MODULE_2__.default)();
    }
};



function game() {
    let player1 = _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('human');
    let comp = _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('computer');
    gameInit(player1);
    gameInit(comp);
}

 const __WEBPACK_DEFAULT_EXPORT__ = (game);

 }),

"./src/components/gameSetUp.js":

((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
const startButton = document.querySelector('.startSub');
const nameInput = document.querySelector('.name');
const nameDiv = document.querySelector('.nameDiv');
const title = document.querySelector('.startTitle');
const content = document.querySelector('#content');

function startRemove() {
    title.remove();
    startButton.remove();
    nameDiv.remove();
};

function createHeader() {
    let iconDiv = document.createElement('div');
    iconDiv.className = "iconDiv";
    content.appendChild(iconDiv);
    let ship1 = document.createElement('span');
    ship1.className = "material-icons";
    ship1.innerHTML = "sailing";
    iconDiv.appendChild(ship1);
};

function getName() {
    let playerName = nameInput.value;
    if (nameInput.value == "") {
        return "player";
    }
    return playerName;
}

function createGameSpace() {
    const gameDiv = document.createElement('div');
    gameDiv.className = "gameDiv";
    content.appendChild(gameDiv);

    const tagDiv = document.createElement('div');
    tagDiv.className = "tagDiv";
    gameDiv.appendChild(tagDiv);

    const play1 = document.createElement('div');
    play1.className = "playerTag";
    play1.id = "play1";
    play1.innerHTML = getName();
    tagDiv.appendChild(play1);

    const play2 = document.createElement('div');
    play2.className = "playerTag";
    play2.id = "play2";
    play2.innerHTML = "computer";
    tagDiv.appendChild(play2);


    const boardDiv = document.createElement('div');
    boardDiv.className = "boardDiv";
    gameDiv.appendChild(boardDiv);
};

function createBoards() {
    const boardL = document.createElement('div');
    const boardDiv = document.querySelector('.boardDiv');
    boardL.className = "board";
    boardL.id = "boardL";
    boardDiv.appendChild(boardL);

    const divider = document.createElement('div');
    divider.className = 'divider';
    boardDiv.appendChild(divider);

    const boardR = document.createElement('div');
    boardR.className = "board";
    boardR.id = "boardR";
    boardDiv.appendChild(boardR);
};

function startGame() {
    createHeader();
    createGameSpace();
    createBoards();
    startRemove();
};

 const __WEBPACK_DEFAULT_EXPORT__ = (startGame);

}),

"./src/gameboard/gameboard.js":

 ((module, __unused_webpack_exports, __webpack_require__) => {

let shipFact = __webpack_require__("./src/ship/ship.js");

const gameboardFact = function(player) {

    this.player = player;
    let board = [
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',           
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        ];
    
    const createBoard = () => {
        board = [
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',           
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            ];
    };

    const placeShip = (ship, startIndex) => {
        if (ship.vert == true) {
            for (i = 0; i < ship.length; i++) {
                board[startIndex + i * 10] = 's';
            }
        }
        else {
            for (i = 0; i < ship.length; i++) {
                board[startIndex + i] = 's';
            }
        }
    };


    const hit = (ship) => {
        ship.health--;
        isSunk(ship);
    }

    const isSunk = (ship) => {
        if (ship.health == 0) {
            ship.sunk = true;
        }
        else {
            ship.sunk = false;
        }
    }

    const receiveAttack = (player, div) => {
        if (div.innerHTML == 's') {
            div.innerHTML = 'x';
            
        }
        else if (div.innerHTML == '~') {
            div.innerHTML = 'o';
        }
    };

    const receiveAtt = (div) => {
        if (div.innerHTML == "~") {
            div.innerHTML = "o";
        }
        else if (div.innerHTML == "s") {
            div.innerHTML = "x";
        }
    };

    const gameOver = () => {
        for (i = 0; i < board.length; i++) {
            if (board[i] == 's') {
                return true;
            }
            else {
                return false;
            }
        }
    };

    return {
        player,
        board,
        createBoard,
        placeShip,
        receiveAttack,
        receiveAtt,
        gameOver,
    }

};

module.exports = gameboardFact;


}),

"./src/ship/ship.js":

 ((module) => {

const shipFact = function(name, length, vert) {
    this.name = name;
    this.length = length;
    this.vert = vert;
    this.health = length;
    const shipArr = Array(length);
    let sunk = false;

    return {
        name,
        length,
        vert,
        health,
        shipArr,
        sunk,
    };
};

module.exports = shipFact;

 })

	});

 	
 	var __webpack_module_cache__ = {};
 	
 	
 	function __webpack_require__(moduleId) {
 		
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		
 		var module = __webpack_module_cache__[moduleId] = {
 			
 			
 			exports: {}
 		};
 	
 		
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		
 		return module.exports;
 	}
 	

 
 	(() => {
 		
 		__webpack_require__.n = (module) => {
 			var getter = module && module.__esModule ?
 				() => (module['default']) :
 				() => (module);
 			__webpack_require__.d(getter, { a: getter });
 			return getter;
 		};
 	})();
 	
 
 	(() => {
 		
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 
 	(() => {
 		
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})(); 	

var __webpack_exports__ = {};

(() => {
"use strict";

__webpack_require__.r(__webpack_exports__);
 var _components_gameSetUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/gameSetUp.js");
 var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/game.js");



const startButton = document.querySelector('.startSub');
startButton.addEventListener('click', () => {
    (0,_components_gameSetUp__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_components_game__WEBPACK_IMPORTED_MODULE_1__.default)();
});
})();

 })()
;
