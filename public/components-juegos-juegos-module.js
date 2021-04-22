(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-juegos-juegos-module"],{

/***/ "AVe6":
/*!********************************************!*\
  !*** ./src/app/services/tateti.service.ts ***!
  \********************************************/
/*! exports provided: TatetiService, Piece, Cell, BestMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiService", function() { return TatetiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMove", function() { return BestMove; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TatetiService {
    constructor() {
        this.maximizer = Piece.X;
        this.minimizer = Piece.O;
    }
    minimax(state, depth, isMaximizer) {
        let bestMove;
        if (isMaximizer) {
            bestMove = new BestMove(-1, -1, -100);
        }
        else {
            bestMove = new BestMove(-1, -1, 100);
        }
        if (depth == 0 || this.isGameOver(state)) {
            return new BestMove(-1, -1, this.evaluate(state));
        }
        const emptyCells = this.shuffle(this.getEmptyCells(state));
        for (let { row, col } of emptyCells) {
            if (state[row][col] === Piece.EMPTY) {
                state[row][col] = isMaximizer ? this.maximizer : this.minimizer;
                const best = this.minimax(state, depth - 1, !isMaximizer);
                state[row][col] = Piece.EMPTY;
                if (isMaximizer) {
                    if (best.score > bestMove.score) {
                        bestMove = new BestMove(row, col, best.score);
                    }
                }
                else {
                    if (best.score < bestMove.score) {
                        bestMove = new BestMove(row, col, best.score);
                    }
                }
            }
        }
        return bestMove;
    }
    isGameOver(state) {
        return this.isWin(state) || this.isDraw(state);
    }
    getEmptyCells(state) {
        const emptyCells = [];
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state[i].length; j++) {
                if (state[i][j] === Piece.EMPTY) {
                    emptyCells.push(new Cell(i, j));
                }
            }
        }
        return emptyCells;
    }
    countOfEmptyCells(state) {
        return this.getEmptyCells(state).length;
    }
    isDraw(state) {
        if (state.some(row => row.some(c => c === Piece.EMPTY))) {
            return false;
        }
        return !this.isWin(state);
    }
    isWin(state) {
        // horizontal
        for (const col of state) {
            if (col[0] == col[1] && col[0] == col[2] && col[0] != Piece.EMPTY) {
                return true;
            }
        }
        // vertical
        for (let col = 0; col < state[0].length; col++) {
            if (state[0][col] === state[1][col] &&
                state[0][col] === state[2][col] &&
                state[0][col] != Piece.EMPTY) {
                return true;
            }
        }
        // diagonal
        if ((state[0][0] === state[1][1] &&
            state[0][0] === state[2][2] &&
            state[0][0] != Piece.EMPTY) ||
            (state[0][2] === state[1][1] &&
                state[0][2] === state[2][0] &&
                state[0][2] != Piece.EMPTY)) {
            return true;
        }
        return false;
    }
    /**
     * This function returns true if there are moves remaining on the board.
     * It returns false if there are no moves left to play.
     */
    isEmptyCellLeft(state) {
        return state.some(row => row.some(c => c === Piece.EMPTY));
    }
    evaluate(state) {
        const winStates = [
            [state[0][0], state[0][1], state[0][2]],
            [state[1][0], state[1][1], state[1][2]],
            [state[2][0], state[2][1], state[2][2]],
            [state[0][0], state[1][0], state[2][0]],
            [state[0][1], state[1][1], state[2][1]],
            [state[0][2], state[1][2], state[2][2]],
            [state[0][0], state[1][1], state[2][2]],
            [state[2][0], state[1][1], state[0][2]]
        ];
        for (var i = 0; i < 8; i++) {
            if (winStates[i].every(x => x === this.maximizer)) {
                return 10;
            }
            if (winStates[i].every(x => x === this.minimizer)) {
                return -10;
            }
        }
        return 0;
    }
    shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            let temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
TatetiService.ɵfac = function TatetiService_Factory(t) { return new (t || TatetiService)(); };
TatetiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TatetiService, factory: TatetiService.ɵfac, providedIn: 'root' });
var Piece;
(function (Piece) {
    Piece["EMPTY"] = "";
    Piece["X"] = "X";
    Piece["O"] = "O";
})(Piece || (Piece = {}));
class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}
class BestMove {
    constructor(row, col, score) {
        this.row = row;
        this.col = col;
        this.score = score;
    }
}


/***/ }),

/***/ "EGDu":
/*!****************************************************************************************!*\
  !*** ./src/app/components/juegos/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PiedraPapelTijeraComponent_div_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ganaste! :) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Perdiste :( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_5_Template(rf, ctx) { }
function PiedraPapelTijeraComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PiedraPapelTijeraComponent_div_27_ng_template_2_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PiedraPapelTijeraComponent_div_27_ng_template_3_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PiedraPapelTijeraComponent_div_27_ng_template_4_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PiedraPapelTijeraComponent_div_27_ng_template_5_Template, 0, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Elija denuevo para continuar...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.theResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
} }
function PiedraPapelTijeraComponent_div_35_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PiedraPapelTijeraComponent_div_35_button_1_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PiedraPapelTijeraComponent_div_35_button_2_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PiedraPapelTijeraComponent_div_35_button_3_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 2);
} }
const _c0 = function (a0) { return { "selectedWeapon": a0 }; };
class PiedraPapelTijeraComponent {
    constructor() {
        this.scores = [0, 0]; // store the scores. index 0 is you. index 1 is player 2.
        this.weapons = [
            'rock',
            'paper',
            'scissors'
        ];
        this.playerSelected = -1;
        this.enemySelected = -1;
        this.loading = false;
        this.isResultShow = false;
        // theResult -  0 winner
        //              1 lose
        //              2 tie
        this.theResult = 0;
        this.isClicked = false;
    }
    pick(weapon) {
        if (this.loading)
            return;
        this.loading = true;
        this.playerSelected = weapon;
        //create a delay to simulate enemy's turn.
        setTimeout(() => {
            this.loading = false;
            // generate a number from 0 -2 
            const randomNum = Math.floor(Math.random() * 3);
            this.enemySelected = randomNum;
            this.checkResult();
            this.isResultShow = true;
        }, Math.floor(Math.random() * 500) + 200);
    }
    reset() {
        this.scores = [0, 0];
        this.playerSelected = -1;
        this.enemySelected = -1;
    }
    checkResult() {
        const playerPick = this.playerSelected;
        const enemyPick = this.enemySelected;
        // if you and the enemy have the same weapon, then it is a tie.
        if (playerPick == enemyPick) {
            this.theResult = 2;
        }
        else if ((playerPick - enemyPick + 3) % 3 == 1) {
            // YOU WIN
            this.theResult = 0;
            this.scores[0] = this.scores[0] + 1;
        }
        else {
            // YOU LOSE
            this.theResult = 1;
            this.scores[1] = this.scores[1] + 1;
        }
    }
    ngOnInit() {
    }
}
PiedraPapelTijeraComponent.ɵfac = function PiedraPapelTijeraComponent_Factory(t) { return new (t || PiedraPapelTijeraComponent)(); };
PiedraPapelTijeraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PiedraPapelTijeraComponent, selectors: [["app-piedra-papel-tijera"]], decls: 39, vars: 13, consts: [[1, "row"], [1, "score-board"], ["id", "user-label", 1, "badge"], ["id", "computer-label", 1, "badge"], ["id", "user-score"], ["id", "computer-score"], [1, "col-md-4"], [1, "content1"], [1, "content2"], [3, "ngClass", "click"], ["src", "./../../../../assets/imagenes/piedra.png", "width", "150", "height", "100", 1, "center"], ["src", "./../../../../assets/imagenes/papel.png", "width", "150", "height", "100", 1, "center"], ["src", "./../../../../assets/imagenes/tijera.png", "width", "150", "height", "100", 1, "center"], [1, "result"], ["class", "flex-container flex-center", "style", "flex-direction: column", 4, "ngIf"], [1, "computer-choice"], ["class", "flex-container flex-center", 4, "ngIf"], [1, "start-over"], [1, "btn", "btn-primary", "start-over", 3, "click"], [1, "flex-container", "flex-center", 2, "flex-direction", "column"], [3, "ngSwitch"], [3, "ngSwitchCase"], ["ngSwitchDefault", ""], [1, "flex-container", "flex-center"], ["class", "comp-selected", 4, "ngIf"], [1, "comp-selected"]], template: function PiedraPapelTijeraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jugador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Elija su arma: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_19_listener() { return ctx.pick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_21_listener() { return ctx.pick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_23_listener() { return ctx.pick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PiedraPapelTijeraComponent_div_27_Template, 8, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Arma del bot: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PiedraPapelTijeraComponent_div_35_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_37_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reiniciar Puntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scores[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scores[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.playerSelected === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.playerSelected === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.playerSelected === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isResultShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enemySelected !== -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #24272E;\r\n  text-align: center;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n.score-board[_ngcontent-%COMP%] {\r\n  margin: 50px auto;\r\n  border: 3px solid green;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  width: 250px;\r\n  color: green;\r\n  font-size: 46px;\r\n  font-weight: 500;\r\n  padding: 15px 20px;\r\n  font-family: Asap, sans-serif;\r\n  position: relative;\r\n}\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background: #E2584D;\r\n  color: white;\r\n  font-size: 14px;\r\n  padding: 2px 10px;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n#user-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: -30px;\r\n}\r\n\r\n\r\n#computer-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -40px;\r\n}\r\n\r\n\r\n.result[_ngcontent-%COMP%] {\r\n  margin-top: 120px;\r\n  font-size: 20px;\r\n  color: white;\r\n  background-color:orange;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.player-choice[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.computer-choice[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.result[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n.choices[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.choice[_ngcontent-%COMP%] {\r\n  border: 4px solid white;\r\n  border-radius: 50%;\r\n  margin: 0 20px;\r\n  padding: 10px;\r\n  display: inline-block;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n\r\n.choice[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: #24272E;\r\n}\r\n\r\n\r\n#action-message[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Asap, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  margin-top: 30px;\r\n  padding-top: 50px;\r\n  padding-bottom: 180px;\r\n}\r\n\r\n\r\n.content1[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    color: white;\r\n  }\r\n\r\n\r\n.content2[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    color: white;\r\n  }\r\n\r\n\r\n.score[_ngcontent-%COMP%]{\r\n    margin-top:.5em;\r\n    margin-left:2em;\r\n    font-size:1.5em;\r\n    color: white;\r\n  }\r\n\r\n\r\n.selectedWeapon[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n  }\r\n\r\n\r\n.comp-selected[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n  }\r\n\r\n\r\n.start-over[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 46%;    \r\n    bottom:80px;\r\n    font-size: 18px;\r\n    padding: 10px 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZWRyYS1wYXBlbC10aWplcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZOztBQUVkOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDs7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6Qjs7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJwaWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgY29sb3I6ICMyNDI3MkU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2NvcmUtYm9hcmQge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFzYXAsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNFMjU4NEQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBmb250LWZhbWlseTogQXNhcCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3VzZXItbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgbGVmdDogLTMwcHg7XHJcbn1cclxuXHJcbiNjb21wdXRlci1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICByaWdodDogLTQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnJlc3VsdCB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItY2hvaWNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29tcHV0ZXItY2hvaWNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVzdWx0ID4gcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2hvaWNlcyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaG9pY2Uge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY2hvaWNlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyRTtcclxufVxyXG5cclxuI2FjdGlvbi1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxODBweDtcclxufVxyXG5cclxuLmNvbnRlbnQxe1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY29udGVudDJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNjb3Jle1xyXG4gICAgbWFyZ2luLXRvcDouNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnNlbGVjdGVkV2VhcG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICAuY29tcC1zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLnN0YXJ0LW92ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNDYlOyAgICBcclxuICAgIGJvdHRvbTo4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "LErV":
/*!*******************************************************!*\
  !*** ./src/app/components/juegos/juegos.component.ts ***!
  \*******************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JuegosComponent {
    constructor() { }
    jugarTateti() {
        location.assign('./juegos/tateti');
    }
    jugarPPT() {
        location.assign('./juegos/piedra-papel-tijera');
    }
    jugarMemotest() {
        location.assign('./juegos/memotest');
    }
    ngOnInit() {
    }
}
JuegosComponent.ɵfac = function JuegosComponent_Factory(t) { return new (t || JuegosComponent)(); };
JuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JuegosComponent, selectors: [["app-juegos"]], decls: 41, vars: 0, consts: [[1, "title"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem", "margin-left", "150px", "float", "left"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], ["src", "./../../../assets/imagenes/tateti.jpg", "alt", "tateti", "width", "200", "height", "200", 1, "center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem", "margin-left", "100px", "float", "left"], ["src", "./../../../assets/imagenes/ppt.jpg", "alt", "ppt", "width", "200", "height", "200", 1, "center"], ["src", "./../../../assets/imagenes/memo.png", "alt", "memo", "width", "200", "height", "200", 1, "center"], [1, "card", "border-primary", "mb-3", 2, "max-width", "18rem", "margin-left", "100px", "float", "left"], ["type", "button", 1, "btn", "btn-success"]], template: function JuegosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Elegir un juego:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ta-Te-Ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_10_listener() { return ctx.jugarTateti(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Piedra Papel Tijera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_19_listener() { return ctx.jugarPPT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Memotest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_28_listener() { return ctx.jugarMemotest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Proximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center[_ngcontent-%COMP%], button[_ngcontent-%COMP%]\r\n{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]\r\n{\r\n    font-style: italic;\r\n    color: orange;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1ZWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJqdWVnb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIsYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZVxyXG57XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "QklA":
/*!*************************************************************************!*\
  !*** ./src/app/components/juegos/memotest/tablero/tablero.component.ts ***!
  \*************************************************************************/
/*! exports provided: TableroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroComponent", function() { return TableroComponent; });
/* harmony import */ var _servicios_tablero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../servicios/tablero.service */ "XtWg");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tarjeta/tarjeta.component */ "iRT7");






function TableroComponent_app_tarjeta_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tarjeta", 3);
} if (rf & 2) {
    const tarjeta_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infoTarjeta", tarjeta_r1)("@tarjetasAnimation", tarjeta_r1);
} }
class TableroComponent {
    constructor(actions) {
        this.actions = actions;
    }
    set cantidadFichas(cantidadFichas) {
        this._cantidadFichas = cantidadFichas;
        this.tarjetasSeleccionadas = this.actions.getTarjetas(this._cantidadFichas);
    }
    ngOnInit() {
    }
}
TableroComponent.ɵfac = function TableroComponent_Factory(t) { return new (t || TableroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servicios_tablero_service__WEBPACK_IMPORTED_MODULE_0__["TableroService"])); };
TableroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableroComponent, selectors: [["app-tablero"]], inputs: { cantidadFichas: "cantidadFichas" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_servicios_tablero_service__WEBPACK_IMPORTED_MODULE_0__["TableroService"]])], decls: 3, vars: 1, consts: [[1, "jumbotron"], [1, "row"], ["role", "button", 3, "infoTarjeta", 4, "ngFor", "ngForOf"], ["role", "button", 3, "infoTarjeta"]], template: function TableroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableroComponent_app_tarjeta_2_Template, 1, 2, "app-tarjeta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tarjetasSeleccionadas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__["TarjetaComponent"]], styles: [".jumbotron[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 1px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.col-lg-12[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n    padding-left: 19px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoidGFibGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29sLWxnLTEyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('tarjetasAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                ])
            ])
        ] } });


/***/ }),

/***/ "RlWT":
/*!****************************************************!*\
  !*** ./src/app/components/juegos/juegos.module.ts ***!
  \****************************************************/
/*! exports provided: JuegosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosModule", function() { return JuegosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juegos-routing.module */ "ZdTQ");
/* harmony import */ var _juegos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juegos.component */ "LErV");
/* harmony import */ var _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tateti/tateti.component */ "r6zm");
/* harmony import */ var _tateti_celda_celda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tateti/celda/celda.component */ "kXzx");
/* harmony import */ var _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piedra-papel-tijera/piedra-papel-tijera.component */ "EGDu");
/* harmony import */ var _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memotest/memotest.component */ "mq7F");
/* harmony import */ var _memotest_cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memotest/cronometro/cronometro.component */ "ao1Y");
/* harmony import */ var _memotest_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./memotest/tablero/tablero.component */ "QklA");
/* harmony import */ var _memotest_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./memotest/tarjeta/tarjeta.component */ "iRT7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class JuegosModule {
}
JuegosModule.ɵfac = function JuegosModule_Factory(t) { return new (t || JuegosModule)(); };
JuegosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: JuegosModule });
JuegosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](JuegosModule, { declarations: [_juegos_component__WEBPACK_IMPORTED_MODULE_2__["JuegosComponent"],
        _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__["TatetiComponent"],
        _tateti_celda_celda_component__WEBPACK_IMPORTED_MODULE_4__["CeldaComponent"],
        _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__["PiedraPapelTijeraComponent"],
        _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_6__["MemotestComponent"],
        _memotest_cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_7__["CronometroComponent"],
        _memotest_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_8__["TableroComponent"],
        _memotest_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_9__["TarjetaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();


/***/ }),

/***/ "XtWg":
/*!*************************************************************************!*\
  !*** ./src/app/components/juegos/memotest/servicios/tablero.service.ts ***!
  \*************************************************************************/
/*! exports provided: TableroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroService", function() { return TableroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TableroService {
    constructor() {
        this.NombreTarjetas = ['fa-car', 'fa-bug', 'fa-diamond', 'fa-heart', 'fa-binoculars', 'fa-apple',
            'fa-cc-visa', 'fa-internet-explorer', 'fa-star', 'fa-university', 'fa-facebook', 'fa-instagram',
            'fa-youtube', 'fa-angellist', 'fa-wifi', 'fa-tint', 'fa-life-ring', 'fa-suitcase', 'fa-futbol-o',
            'fa-motorcycle', 'fa-leaf', 'fa-eye', 'fa-coffee', 'fa-bullseye', 'fa-plane'];
    }
    mezclar(tarjetas) {
        const newArr = tarjetas.slice();
        for (let i = newArr.length; i; i -= 1) {
            const j = Math.floor(Math.random() * i);
            const x = newArr[i - 1];
            newArr[i - 1] = newArr[j];
            newArr[j] = x;
        }
        return newArr;
    }
    getTarjetas(cantidadTarjetas) {
        let tarjetas = this.NombreTarjetas.slice(0, cantidadTarjetas).map(t => ({
            nombre: t,
            visible: false
        }));
        tarjetas = tarjetas.concat(tarjetas).map((t, i) => ({
            _id: i,
            nombre: t.nombre,
            visible: t.visible,
        }));
        return this.mezclar(tarjetas);
    }
}
TableroService.ɵfac = function TableroService_Factory(t) { return new (t || TableroService)(); };
TableroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableroService, factory: TableroService.ɵfac });


/***/ }),

/***/ "ZdTQ":
/*!************************************************************!*\
  !*** ./src/app/components/juegos/juegos-routing.module.ts ***!
  \************************************************************/
/*! exports provided: JuegosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosRoutingModule", function() { return JuegosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _juegos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juegos.component */ "LErV");
/* harmony import */ var _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piedra-papel-tijera/piedra-papel-tijera.component */ "EGDu");
/* harmony import */ var _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tateti/tateti.component */ "r6zm");
/* harmony import */ var _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memotest/memotest.component */ "mq7F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'tateti', component: _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__["TatetiComponent"] },
    { path: 'piedra-papel-tijera', component: _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_2__["PiedraPapelTijeraComponent"] },
    { path: 'memotest', component: _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_4__["MemotestComponent"] },
    { path: '', component: _juegos_component__WEBPACK_IMPORTED_MODULE_1__["JuegosComponent"] },
];
class JuegosRoutingModule {
}
JuegosRoutingModule.ɵfac = function JuegosRoutingModule_Factory(t) { return new (t || JuegosRoutingModule)(); };
JuegosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: JuegosRoutingModule });
JuegosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JuegosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ao1Y":
/*!*******************************************************************************!*\
  !*** ./src/app/components/juegos/memotest/cronometro/cronometro.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CronometroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronometroComponent", function() { return CronometroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CronometroComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r0.tiempoRestante, "mm:ss"));
} }
class CronometroComponent {
    constructor() {
        this.tiempoRestante = null;
        this.timer = null;
        this.tiempoTerminado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set tiempoMinutos(tiempoMinutos) {
        this._tiempoMinutos = tiempoMinutos;
    }
    set juegoIniciado(juegoIniciado) {
        this._juegoIniciado = juegoIniciado;
        if (this._juegoIniciado) {
            this.tiempoRestante = new Date(this.tiempoRestante.setMinutes(this.tiempoRestante.getMinutes() + this._tiempoMinutos));
            this.iniciar();
        }
        else {
            this.detener();
        }
    }
    ngOnInit() {
        this.detener();
    }
    iniciar() {
        this.timer = setInterval(() => {
            if (this.tiempoRestante.getMinutes() === 0 && this.tiempoRestante.getSeconds() === 0) {
                this.detener();
            }
            else {
                this.tiempoRestante = new Date(this.tiempoRestante.setSeconds(this.tiempoRestante.getSeconds() - 1));
            }
        }, 1000);
    }
    detener() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.tiempoRestante = new Date(0, 0, 0, 0, 0, 0, 0);
        this.tiempoTerminado.emit();
    }
}
CronometroComponent.ɵfac = function CronometroComponent_Factory(t) { return new (t || CronometroComponent)(); };
CronometroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CronometroComponent, selectors: [["app-cronometro"]], inputs: { tiempoMinutos: "tiempoMinutos", juegoIniciado: "juegoIniciado" }, outputs: { tiempoTerminado: "tiempoTerminado" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-4", "col-md-offset-4"], [1, "jumbotron", 2, "padding-top", "0", "padding-bottom", "0"], [1, "text-center"]], template: function CronometroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CronometroComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._juegoIniciado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb25vbWV0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY3Jvbm9tZXRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "arPs":
/*!*************************************************************************!*\
  !*** ./src/app/components/juegos/memotest/servicios/tarjeta.service.ts ***!
  \*************************************************************************/
/*! exports provided: TarjetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaService", function() { return TarjetaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TarjetaService {
    constructor() { }
    mostrarTarjeta(tarjeta) {
        if (this.isEmpty(this.primerTarjetaAComparar) && this.isEmpty(this.segundaTarjetaAComparar)) {
            this.primerTarjetaAComparar = tarjeta;
            this.primerTarjetaAComparar.visible = true;
            return;
        }
        if (this.isEmpty(this.segundaTarjetaAComparar)) {
            this.segundaTarjetaAComparar = tarjeta;
            this.segundaTarjetaAComparar.visible = true;
            this.comparar(this.primerTarjetaAComparar, this.segundaTarjetaAComparar);
        }
    }
    comparar(tarjeta1, tarjeta2) {
        this.primerTarjetaAComparar = null;
        this.segundaTarjetaAComparar = null;
        if (tarjeta1.nombre === tarjeta2.nombre) {
            this.aciertos++;
        }
        else {
            setTimeout(function () {
                tarjeta1.visible = false;
                tarjeta2.visible = false;
            }, 1000);
        }
    }
    isEmpty(obj) {
        return obj === null || obj === undefined;
    }
    isUndefined(obj) {
        return obj === undefined;
    }
}
TarjetaService.ɵfac = function TarjetaService_Factory(t) { return new (t || TarjetaService)(); };
TarjetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TarjetaService, factory: TarjetaService.ɵfac });


/***/ }),

/***/ "iRT7":
/*!*************************************************************************!*\
  !*** ./src/app/components/juegos/memotest/tarjeta/tarjeta.component.ts ***!
  \*************************************************************************/
/*! exports provided: TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaComponent", function() { return TarjetaComponent; });
/* harmony import */ var _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servicios/tarjeta.service */ "arPs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class TarjetaComponent {
    constructor(actions) {
        this.actions = actions;
    }
    set infoTarjeta(infoTarjeta) {
        this._infoTarjeta = infoTarjeta;
    }
    ngOnInit() {
    }
    mostrarTarjeta(tarjeta) {
        if (tarjeta.visible) {
            return;
        }
        this.actions.mostrarTarjeta(tarjeta);
    }
}
TarjetaComponent.ɵfac = function TarjetaComponent_Factory(t) { return new (t || TarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__["TarjetaService"])); };
TarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TarjetaComponent, selectors: [["app-tarjeta"]], inputs: { infoTarjeta: "infoTarjeta" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__["TarjetaService"]])], decls: 2, vars: 8, consts: [[1, "col-md-12", "tarjeta", 3, "click"], ["id", "ficha", "aria-hidden", "true", 1, "fa", "fa-3x", 3, "hidden", "ngClass"]], template: function TarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TarjetaComponent_Template_div_click_0_listener() { return ctx.mostrarTarjeta(ctx._infoTarjeta); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("flipped", ctx._infoTarjeta.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("front", ctx._infoTarjeta.visible)("back", !ctx._infoTarjeta.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._infoTarjeta.visible)("ngClass", ctx._infoTarjeta.nombre);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["#ficha[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    position:relative;\r\n    top: calc(50% - 25px);\r\n}\r\n\r\n.tarjeta[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 6px;\r\n    margin-right: 9px;\r\n    text-align: center;\r\n    margin-top: 9px;\r\n    transition: transform 1s;\r\n    transform-style: preserve-3d;\r\n    background-color: rgba(11, 77, 211, 0.664);\r\n}\r\n\r\n.tarjeta.flipped[_ngcontent-%COMP%] {\r\n    transform: rotateY( 180deg );\r\n    background-color: #008744;\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n    transform: rotateY( 0deg );\r\n}\r\n\r\n.front[_ngcontent-%COMP%] {\r\n    transform: rotateY( 180deg );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmpldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InRhcmpldGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWNoYSB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgNzcsIDIxMSwgMC42NjQpO1xyXG59XHJcblxyXG4udGFyamV0YS5mbGlwcGVkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NzQ0O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcgKTtcclxufVxyXG5cclxuLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "kXzx":
/*!*******************************************************************!*\
  !*** ./src/app/components/juegos/tateti/celda/celda.component.ts ***!
  \*******************************************************************/
/*! exports provided: CeldaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeldaComponent", function() { return CeldaComponent; });
/* harmony import */ var _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/tateti.service */ "AVe6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class CeldaComponent {
    constructor() {
        this.piece = _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY;
    }
    get color() {
        switch (this.piece) {
            case _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X:
                return 'x';
            case _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].O:
                return 'o';
            default:
                return '';
        }
    }
    ngOnInit() {
    }
}
CeldaComponent.ɵfac = function CeldaComponent_Factory(t) { return new (t || CeldaComponent)(); };
CeldaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CeldaComponent, selectors: [["app-celda"]], inputs: { piece: "piece", row: "row", col: "col" }, decls: 2, vars: 2, consts: [[1, "cell", 3, "ngClass"]], template: function CeldaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.piece, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".cell[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-sizing: border-box;\r\n    font-size: 5rem;\r\n    font-family: sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n  }\r\n  \r\n  .cell[_ngcontent-%COMP%]:hover {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .cell.x[_ngcontent-%COMP%] {\r\n    color: #e20707;\r\n  }\r\n  \r\n  .cell.o[_ngcontent-%COMP%] {\r\n    color: #3295f8;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoiY2VsZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2VsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsLngge1xyXG4gICAgY29sb3I6ICNlMjA3MDc7XHJcbiAgfVxyXG4gIC5jZWxsLm8ge1xyXG4gICAgY29sb3I6ICMzMjk1Zjg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "mq7F":
/*!******************************************************************!*\
  !*** ./src/app/components/juegos/memotest/memotest.component.ts ***!
  \******************************************************************/
/*! exports provided: MemotestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemotestComponent", function() { return MemotestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cronometro/cronometro.component */ "ao1Y");
/* harmony import */ var _tablero_tablero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablero/tablero.component */ "QklA");




function MemotestComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemotestComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const nivel_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.nivelSeleccionado = nivel_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nivel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nivel_r2.nombre);
} }
function MemotestComponent_app_tablero_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tablero", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cantidadFichas", ctx_r1.nivelSeleccionado ? ctx_r1.nivelSeleccionado.cantidadFichas : null);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class MemotestComponent {
    constructor() {
        this.title = 'MemoTest';
        this.mostrarAlerta = false;
        this.niveles = [
            {
                id: 0,
                nombre: 'Facil',
                tiempoMinutos: 2,
                cantidadFichas: 10
            },
            {
                id: 1,
                nombre: 'Medio',
                tiempoMinutos: 3,
                cantidadFichas: 15
            },
            {
                id: 2,
                nombre: 'Difícil',
                tiempoMinutos: 4,
                cantidadFichas: 20
            },
        ];
        this.nombre = null;
        this.nivelSeleccionado = null;
    }
    ngOnInit() {
        this.juegoIniciado = false;
    }
    iniciar() {
        this.juegoIniciado = true;
        this.mostrarAlerta = true;
        setTimeout(function () {
            this.mostrarAlerta = false;
        }.bind(this), 2000);
    }
    detener() {
        this.juegoIniciado = false;
        this.nombre = null;
        this.nivelSeleccionado = null;
    }
}
MemotestComponent.ɵfac = function MemotestComponent_Factory(t) { return new (t || MemotestComponent)(); };
MemotestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemotestComponent, selectors: [["app-memotest"]], decls: 23, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "container-fluid"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "ngClass"], [1, "caret"], [1, "dropdown-menu"], ["class", "dropdown-item", "role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "navbar-form", "navbar-right"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "container"], [3, "tiempoMinutos", "juegoIniciado", "tiempoTerminado"], [3, "cantidadFichas", 4, "ngIf"], ["role", "button", 1, "dropdown-item", 3, "click"], [3, "cantidadFichas"]], template: function MemotestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Seleccione un nivel para empezar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MemotestComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemotestComponent_Template_button_click_13_listener() { return ctx.iniciar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemotestComponent_Template_button_click_16_listener() { return ctx.detener(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Finalizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-cronometro", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tiempoTerminado", function MemotestComponent_Template_app_cronometro_tiempoTerminado_19_listener() { return ctx.detener(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MemotestComponent_app_tablero_20_Template, 1, 1, "app-tablero", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No esta terminado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.nivelSeleccionado != null && ctx.juegoIniciado));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.nivelSeleccionado ? ctx.nivelSeleccionado.nombre : "Nivel", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.niveles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.juegoIniciado || !ctx.nivelSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.juegoIniciado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tiempoMinutos", ctx.nivelSeleccionado ? ctx.nivelSeleccionado.tiempoMinutos : null)("juegoIniciado", ctx.juegoIniciado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.juegoIniciado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_2__["CronometroComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _tablero_tablero_component__WEBPACK_IMPORTED_MODULE_3__["TableroComponent"]], styles: [".alert[_ngcontent-%COMP%]{\r\n    position:fixed; \r\n    bottom: 0px; \r\n    left: 0px; \r\n    width: 100%;\r\n    z-index:9999; \r\n    border-radius:0px;\r\n    margin-bottom: 0\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbW90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQjtBQUNKIiwiZmlsZSI6Im1lbW90ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnR7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDsgXHJcbiAgICBib3R0b206IDBweDsgXHJcbiAgICBsZWZ0OiAwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4Ojk5OTk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn0iXX0= */"] });


/***/ }),

/***/ "r6zm":
/*!**************************************************************!*\
  !*** ./src/app/components/juegos/tateti/tateti.component.ts ***!
  \**************************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/tateti.service */ "AVe6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _celda_celda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./celda/celda.component */ "kXzx");





function TatetiComponent_section_14_div_4_app_celda_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-celda", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TatetiComponent_section_14_div_4_app_celda_1_Template_app_celda_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const col_r6 = ctx.$implicit; const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.move(row_r4, col_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", row_r4)("col", col_r6)("piece", ctx_r5.board[row_r4][col_r6]);
} }
const _c0 = function () { return [0, 1, 2]; };
function TatetiComponent_section_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TatetiComponent_section_14_div_4_app_celda_1_Template, 1, 3, "app-celda", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function TatetiComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TatetiComponent_section_14_div_4_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.statusMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
class TatetiComponent {
    constructor(svc) {
        this.svc = svc;
        this.player = _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X;
        this.aiLevelEasy = true;
    }
    ngOnInit() { }
    choosePlayer(checked) {
        this.player = checked ? _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X : _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].O;
    }
    chooseLevel(checked) {
        this.aiLevelEasy = checked;
    }
    newGame() {
        this.currentPlayer = _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X;
        this.gameOver = false;
        this.board = [
            [_services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY],
            [_services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY],
            [_services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY, _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY]
        ];
        this.statusMessage = `Turno de ${this.currentPlayer}`;
        if (this.player !== this.currentPlayer) {
            this.aiTurn();
        }
    }
    move(row, col) {
        if (!this.gameOver && this.board[row][col] === _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].EMPTY) {
            this.board[row][col] = this.currentPlayer;
            if (this.svc.isDraw(this.board)) {
                this.statusMessage = `Es un empate`;
                this.gameOver = true;
            }
            else if (this.svc.isWin(this.board)) {
                this.statusMessage = `Gano Jugador ${this.currentPlayer}!`;
                this.gameOver = true;
            }
            else {
                this.currentPlayer = this.currentPlayer === _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].O ? _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X : _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].O;
                this.statusMessage = `Turno de ${this.currentPlayer}`;
                if (this.currentPlayer !== this.player) {
                    this.aiTurn();
                }
            }
        }
    }
    aiTurn() {
        const emptyCells = this.svc.countOfEmptyCells(this.board);
        if (emptyCells === 9) {
            this.move(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
        }
        else {
            const bestMove = this.svc.minimax(this.board, this.aiLevelEasy && emptyCells > 5 ? 5 : emptyCells, this.player !== _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X);
            this.move(bestMove.row, bestMove.col);
        }
    }
    logBoard() {
        for (let row = 0; row < this.board.length; row++) {
            console.log(this.board[row]);
        }
    }
}
TatetiComponent.ɵfac = function TatetiComponent_Factory(t) { return new (t || TatetiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["TatetiService"])); };
TatetiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TatetiComponent, selectors: [["app-tateti"]], decls: 15, vars: 1, consts: [[2, "text-align", "center"], [2, "margin", "0.5rem"], ["type", "checkbox", "id", "player", "name", "player", "checked", "", 3, "click"], ["c", ""], ["for", "player", 2, "font-size", "1.25rem"], ["type", "checkbox", "id", "easy", "name", "easy", "checked", "", 3, "click"], ["easy", ""], ["for", "easy", 2, "font-size", "1.25rem"], ["type", "button", 1, "new-game", 3, "click"], [4, "ngIf"], [1, "status"], [1, "board"], ["class", "board-row", 4, "ngFor", "ngForOf"], [1, "board-row"], [3, "row", "col", "piece", "click", 4, "ngFor", "ngForOf"], [3, "row", "col", "piece", "click"]], template: function TatetiComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TatetiComponent_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.choosePlayer(_r0.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Jugar primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TatetiComponent_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx.chooseLevel(_r1.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Modo facil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TatetiComponent_Template_button_click_12_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Comenzar nuevo juego ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TatetiComponent_section_14_Template, 5, 3, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _celda_celda_component__WEBPACK_IMPORTED_MODULE_3__["CeldaComponent"]], styles: [".board[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  color: white;\r\n  \r\n  \r\n}\r\n\r\n.board-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: grey;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  \r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  \r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.new-game[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  color: #fff;\r\n  background-color: #ff7b00;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.new-game[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhdGV0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCOztBQUU5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCO2dFQUM4RDtBQUNoRTs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoidGF0ZXRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpibGFjazsgKi9cclxuICBcclxufVxyXG5cclxuLmJvYXJkLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxufVxyXG4uc3RhdHVzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLm5ldy1nYW1lIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdiMDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5uZXctZ2FtZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=components-juegos-juegos-module.js.map