(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-juegos-juegos-module"],{

/***/ "8ZQZ":
/*!*******************************************************************!*\
  !*** ./src/app/components/juegos/quince/board/board.component.ts ***!
  \*******************************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../servicios/board.service */ "ClNL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile/tile.component */ "Y5+Y");




function BoardComponent_app_tile_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tile", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_app_tile_0_Template_app_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.boardService.moveTile(i_r2); })("swipeup", function BoardComponent_app_tile_0_Template_app_tile_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.boardService.move("up"); })("swipedown", function BoardComponent_app_tile_0_Template_app_tile_swipedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.boardService.move("down"); })("swipeleft", function BoardComponent_app_tile_0_Template_app_tile_swipeleft_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.boardService.move("left"); })("swiperight", function BoardComponent_app_tile_0_Template_app_tile_swiperight_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.boardService.move("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r1)("index", i_r2);
} }
class BoardComponent {
    constructor(boardService) {
        this.boardService = boardService;
    }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 1, vars: 1, consts: [[3, "value", "index", "click", "swipeup", "swipedown", "swipeleft", "swiperight", 4, "ngFor", "ngForOf"], [3, "value", "index", "click", "swipeup", "swipedown", "swipeleft", "swiperight"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardComponent_app_tile_0_Template, 1, 2, "app-tile", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardService.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__["TileComponent"]], styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n    width: 610px;\r\n    height: 610px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7RUFDZiIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjEwcHg7XHJcbiAgICBoZWlnaHQ6IDYxMHB4O1xyXG4gIH1cclxuICBcclxuICAiXX0= */"] });


/***/ }),

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

/***/ "ClNL":
/*!*********************************************************************!*\
  !*** ./src/app/components/juegos/quince/servicios/board.service.ts ***!
  \*********************************************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defs */ "l8U7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BoardService {
    constructor() {
        this.content = [];
        this.completed = [];
        this.started = false;
        this.initialContent = [];
        this.finished = false;
        this.elapsedSeconds = 0; // tiempo
        this.timerSrc = null;
        this.timerSub = null;
        this.movesCount = 0; // movimientos
        this.movesStack = [];
        this.completed = [];
        for (let i = 1; i <= 15; i++) {
            this.completed.push(i);
        }
        this.completed.push(null);
    }
    initGame() {
        this.started = false;
        this.finished = false;
        this.elapsedSeconds = null;
        this.movesCount = 0;
        this.movesStack = [];
        this.setCompleted();
    }
    startGame(initial = null) {
        this.started = true;
        this.finished = false;
        this.elapsedSeconds = 0;
        this.movesCount = 0;
        if (initial) {
            // we can cheat if we want
            this.content = initial.slice();
        }
        else {
            this.content = this.shuffle(this.completed);
        }
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
        this.initialContent = this.content.slice();
        this.timerSrc = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000);
        this.timerSub = this.timerSrc.subscribe(() => {
            if (this.finished == false) {
                this.elapsedSeconds++;
            }
        });
    }
    setCompleted() {
        this.content = this.completed.slice();
    }
    isInProgress() {
        return this.started && !this.finished;
    }
    shuffle(arr) {
        const result = arr.slice();
        return result.sort(() => Math.random() - 0.5);
    }
    getNullIndex() {
        return this.content.findIndex(i => i === null);
    }
    moveNullToIndex(sourceIndex, nullIndex) {
        const sourceValue = this.content[sourceIndex];
        this.content[sourceIndex] = null;
        this.content[nullIndex] = sourceValue;
    }
    isCompleted() {
        return JSON.stringify(this.content) === JSON.stringify(this.completed);
    }
    move(direction) {
        let successful = false;
        if (this.isInProgress()) {
            switch (direction) {
                case 'up':
                    successful = this.moveUp();
                    break;
                case 'down':
                    successful = this.moveDown();
                    break;
                case 'left':
                    successful = this.moveLeft();
                    break;
                case 'right':
                    successful = this.moveRight();
                    break;
            }
        }
        if (successful) {
            this.movesStack.push(direction);
            this.movesCount++;
            this.finished = this.isCompleted();
        }
    }
    moveUp() {
        const nullIndex = this.getNullIndex();
        if (nullIndex <= 12) {
            const sourceIndex = nullIndex + 4;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveDown() {
        const nullIndex = this.getNullIndex();
        if (nullIndex >= 3) {
            const sourceIndex = nullIndex - 4;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveLeft() {
        const nullIndex = this.getNullIndex();
        if (nullIndex % 4 !== 3) {
            const sourceIndex = nullIndex + 1;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveRight() {
        const nullIndex = this.getNullIndex();
        if (nullIndex % 4 !== 0) {
            const sourceIndex = nullIndex - 1;
            this.moveNullToIndex(sourceIndex, nullIndex);
            return true;
        }
    }
    moveTile(index) {
        const nullIndex = this.getNullIndex();
        switch (nullIndex) {
            case index - 4:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_UP"]);
                break;
            case index + 4:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_DOWN"]);
                break;
            case index - 1:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_LEFT"]);
                break;
            case index + 1:
                this.move(_defs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_RIGHT"]);
                break;
        }
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _clases_puntos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../clases/puntos */ "fZkn");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_puntajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/puntajes.service */ "q4pn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PiedraPapelTijeraComponent_div_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ganaste! :) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Perdiste :( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Empate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_27_ng_template_5_Template(rf, ctx) { }
function PiedraPapelTijeraComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PiedraPapelTijeraComponent_div_27_ng_template_2_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PiedraPapelTijeraComponent_div_27_ng_template_3_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PiedraPapelTijeraComponent_div_27_ng_template_4_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PiedraPapelTijeraComponent_div_27_ng_template_5_Template, 0, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Elija denuevo para continuar...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r0.theResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);
} }
function PiedraPapelTijeraComponent_div_35_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PiedraPapelTijeraComponent_div_35_button_1_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PiedraPapelTijeraComponent_div_35_button_2_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PiedraPapelTijeraComponent_div_35_button_3_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.enemySelected === 2);
} }
function PiedraPapelTijeraComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_div_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.guardarPuntaje(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Guardar Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selectedWeapon": a0 }; };
class PiedraPapelTijeraComponent {
    constructor(authSvc, puntajeSvc) {
        this.authSvc = authSvc;
        this.puntajeSvc = puntajeSvc;
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
        this.puntaje = new _clases_puntos__WEBPACK_IMPORTED_MODULE_0__["Puntos"]();
        this.user$ = this.authSvc.afAuth.user;
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
    guardarPuntaje() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Desea guardar este puntaje?',
            showDenyButton: true,
            confirmButtonText: `Guardar`,
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed && (this.scores[0] != 0 || this.scores[1] != 0)) {
                this.puntaje.victorias = this.scores[0];
                this.puntaje.derrotas = this.scores[1];
                this.puntajeSvc.AgregarPuntaje(this.puntaje);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('¡Se guardo el puntaje!', '', 'success');
            }
            else {
                if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No se ha guardado el puntaje', '', 'info');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('ERROR', 'Debe jugar al menos 1 vez!', 'error');
                }
            }
        });
    }
    ngOnInit() {
        this.authSvc.getCurrentUser().subscribe(user => {
            if (user != null) {
                this.puntaje.usuario = user.displayName;
                this.puntaje.fecha = new Date().toLocaleDateString();
                this.puntaje.juego = "piedra-papel-tijera";
            }
        });
    }
}
PiedraPapelTijeraComponent.ɵfac = function PiedraPapelTijeraComponent_Factory(t) { return new (t || PiedraPapelTijeraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_puntajes_service__WEBPACK_IMPORTED_MODULE_4__["PuntajesService"])); };
PiedraPapelTijeraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PiedraPapelTijeraComponent, selectors: [["app-piedra-papel-tijera"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], decls: 40, vars: 16, consts: [[1, "row"], [1, "score-board"], ["id", "user-label", 1, "badge"], ["id", "computer-label", 1, "badge"], ["id", "user-score"], ["id", "computer-score"], [1, "col-md-4"], [1, "content1"], [1, "content2"], [3, "ngClass", "click"], ["src", "./../../../../assets/imagenes/piedra.png", "width", "150", "height", "100", 1, "center"], ["src", "./../../../../assets/imagenes/papel.png", "width", "150", "height", "100", 1, "center"], ["src", "./../../../../assets/imagenes/tijera.png", "width", "150", "height", "100", 1, "center"], [1, "result"], ["class", "flex-container flex-center", "style", "flex-direction: column", 4, "ngIf"], [1, "computer-choice"], ["class", "flex-container flex-center", 4, "ngIf"], [1, "btn-reset", 3, "click"], [4, "ngIf"], [1, "flex-container", "flex-center", 2, "flex-direction", "column"], [3, "ngSwitch"], [3, "ngSwitchCase"], ["ngSwitchDefault", ""], [1, "flex-container", "flex-center"], ["class", "comp-selected", 4, "ngIf"], [1, "comp-selected"], [1, "btn-score", 3, "click"]], template: function PiedraPapelTijeraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Jugador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00A0:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Elija su arma: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_19_listener() { return ctx.pick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_21_listener() { return ctx.pick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_23_listener() { return ctx.pick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, PiedraPapelTijeraComponent_div_27_Template, 8, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Arma del bot: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PiedraPapelTijeraComponent_div_35_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_Template_button_click_36_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Reiniciar Puntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, PiedraPapelTijeraComponent_div_38_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.scores[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.scores[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.playerSelected === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.playerSelected === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.playerSelected === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isResultShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.enemySelected !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 8, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #24272E;\r\n  text-align: center;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n.score-board[_ngcontent-%COMP%] {\r\n  margin: 50px auto;\r\n  border: 3px solid green;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  width: 250px;\r\n  color: green;\r\n  font-size: 46px;\r\n  font-weight: 500;\r\n  padding: 15px 20px;\r\n  font-family: Asap, sans-serif;\r\n  position: relative;\r\n}\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background: #E2584D;\r\n  color: white;\r\n  font-size: 14px;\r\n  padding: 2px 10px;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n#user-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: -30px;\r\n}\r\n\r\n\r\n#computer-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -40px;\r\n}\r\n\r\n\r\n.result[_ngcontent-%COMP%] {\r\n  margin-top: 120px;\r\n  font-size: 20px;\r\n  color: white;\r\n  background-color:orange;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.player-choice[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.computer-choice[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.result[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-family: Asap, sans-serif;\r\n}\r\n\r\n\r\n.choices[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.choice[_ngcontent-%COMP%] {\r\n  border: 4px solid white;\r\n  border-radius: 50%;\r\n  margin: 0 20px;\r\n  padding: 10px;\r\n  display: inline-block;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n\r\n.choice[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: #24272E;\r\n}\r\n\r\n\r\n#action-message[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Asap, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  margin-top: 30px;\r\n  padding-top: 50px;\r\n  padding-bottom: 180px;\r\n}\r\n\r\n\r\n.content1[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    color: white;\r\n  }\r\n\r\n\r\n.content2[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    color: white;\r\n  }\r\n\r\n\r\n.score[_ngcontent-%COMP%]{\r\n    margin-top:.5em;\r\n    margin-left:2em;\r\n    font-size:1.5em;\r\n    color: white;\r\n  }\r\n\r\n\r\n.selectedWeapon[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n  }\r\n\r\n\r\n.comp-selected[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n  }\r\n\r\n\r\n.btn-reset[_ngcontent-%COMP%]\r\n{\r\n  width: 20%;\r\n  color: #fff;\r\n  background-color: #ff7b00;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n  \r\n  \r\n}\r\n\r\n\r\n.btn-score[_ngcontent-%COMP%]{\r\n  width: 20%;\r\n  color: black;\r\n  background-color: skyblue;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZWRyYS1wYXBlbC10aWplcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZOztBQUVkOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDs7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6Qjs7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7OztBQUdGOztFQUVFLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7O0FBR2xCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwaWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgY29sb3I6ICMyNDI3MkU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2NvcmUtYm9hcmQge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFzYXAsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNFMjU4NEQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBmb250LWZhbWlseTogQXNhcCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3VzZXItbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgbGVmdDogLTMwcHg7XHJcbn1cclxuXHJcbiNjb21wdXRlci1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICByaWdodDogLTQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnJlc3VsdCB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItY2hvaWNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29tcHV0ZXItY2hvaWNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVzdWx0ID4gcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2hvaWNlcyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaG9pY2Uge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY2hvaWNlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyRTtcclxufVxyXG5cclxuI2FjdGlvbi1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBBc2FwLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxODBweDtcclxufVxyXG5cclxuLmNvbnRlbnQxe1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY29udGVudDJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNjb3Jle1xyXG4gICAgbWFyZ2luLXRvcDouNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnNlbGVjdGVkV2VhcG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICAuY29tcC1zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiBcclxuXHJcbi5idG4tcmVzZXRcclxue1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2IwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICBcclxuICBcclxufVxyXG5cclxuLmJ0bi1zY29yZXtcclxuICB3aWR0aDogMjAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG59Il19 */"] });


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
    listadoTateti() {
        location.assign('./listados/listado-tateti');
    }
    jugarPPT() {
        location.assign('./juegos/piedra-papel-tijera');
    }
    listadoPpt() {
        location.assign('./listados/listado-ppt');
    }
    jugarMemotest() {
        location.assign('./juegos/memotest');
    }
    listadoMemotest() {
        location.assign('./listados/listado-memotest');
    }
    jugarQuince() {
        location.assign('./juegos/quince');
    }
    listadoQuince() {
        location.assign('./listados/listado-quince');
    }
    ngOnInit() {
    }
}
JuegosComponent.ɵfac = function JuegosComponent_Factory(t) { return new (t || JuegosComponent)(); };
JuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JuegosComponent, selectors: [["app-juegos"]], decls: 48, vars: 0, consts: [[1, "card", "border-primary", "mb-3", 2, "max-width", "20rem", "margin-left", "150px", "float", "left"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], ["src", "./../../../assets/imagenes/tateti.jpg", "alt", "tateti", "width", "200", "height", "200", 1, "center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem", "margin-left", "100px", "float", "left"], ["src", "./../../../assets/imagenes/ppt.jpg", "alt", "ppt", "width", "200", "height", "200", 1, "center"], ["src", "./../../../assets/imagenes/memo.png", "alt", "memo", "width", "200", "height", "200", 1, "center"], [1, "card", "border-primary", "mb-3", 2, "max-width", "18rem", "margin-left", "100px", "float", "left"], ["src", "./../../../assets/imagenes/mijuego.png", "alt", "mijuego", "width", "200", "height", "200", 1, "center"]], template: function JuegosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ta-Te-Ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_10_listener() { return ctx.jugarTateti(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_13_listener() { return ctx.listadoTateti(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Puntajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Piedra Papel Tijera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_21_listener() { return ctx.jugarPPT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_24_listener() { return ctx.listadoPpt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Puntajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Memotest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_32_listener() { return ctx.jugarMemotest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_35_listener() { return ctx.listadoMemotest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Puntajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Juego del 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_43_listener() { return ctx.jugarQuince(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JuegosComponent_Template_button_click_46_listener() { return ctx.listadoQuince(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Puntajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center[_ngcontent-%COMP%], button[_ngcontent-%COMP%]\r\n{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]\r\n{\r\n    font-style: italic;\r\n    color: orange;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1ZWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJqdWVnb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIsYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZVxyXG57XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "LU1z":
/*!**************************************************************!*\
  !*** ./src/app/components/juegos/quince/quince.component.ts ***!
  \**************************************************************/
/*! exports provided: QuinceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuinceComponent", function() { return QuinceComponent; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "l8U7");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _clases_puntos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/puntos */ "fZkn");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/board.service */ "ClNL");
/* harmony import */ var _services_puntajes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/puntajes.service */ "q4pn");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/state.component */ "QSlT");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board/board.component */ "8ZQZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function QuinceComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuinceComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.guardarPuntaje(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuinceComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuinceComponent_div_6_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r1);
} }
class QuinceComponent {
    constructor(boardService, authSvc, puntajeSvc) {
        this.boardService = boardService;
        this.authSvc = authSvc;
        this.puntajeSvc = puntajeSvc;
        this.title = 'Fifteen Game';
        this.puntaje = new _clases_puntos__WEBPACK_IMPORTED_MODULE_2__["Puntos"]();
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
        this.boardService.initGame();
        this.authSvc.getCurrentUser().subscribe(user => {
            if (user != null) {
                this.puntaje.usuario = user.displayName;
                this.puntaje.fecha = new Date().toLocaleDateString();
                this.puntaje.juego = "quince";
            }
        });
    }
    guardarPuntaje() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Desea guardar este puntaje?',
            showDenyButton: true,
            confirmButtonText: `Guardar`,
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed && this.boardService.finished == true) {
                this.puntaje.tiempo = this.boardService.elapsedSeconds.toString();
                this.puntaje.movimientos = this.boardService.movesCount;
                this.puntajeSvc.AgregarPuntaje(this.puntaje);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('¡Se guardo el puntaje!', '', 'success');
            }
            else {
                if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('No se ha guardado el puntaje', '', 'info');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('ERROR', 'Debe jugar y terminar el puzzle al menos 1 vez!', 'error');
                }
            }
        });
    }
    handleKeyboardEvent(event) {
        if (this.boardService.isInProgress()) {
            switch (event.key) {
                case 'r':
                    this.boardService.initGame();
                    return;
            }
            const direction = _defs__WEBPACK_IMPORTED_MODULE_0__["keyToDirection"][event.key];
            if (direction) {
                this.boardService.move(direction);
            }
        }
        else {
            switch (event.key) {
                case 's':
                    this.boardService.startGame();
                    break;
                case 'S':
                    this.boardService.startGame([
                        1, 2, 3, 4,
                        5, 6, 7, 8,
                        9, 10, 11, 12,
                        null, 13, 14, 15
                    ]);
                    break;
            }
        }
    }
}
QuinceComponent.ɵfac = function QuinceComponent_Factory(t) { return new (t || QuinceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_servicios_board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_puntajes_service__WEBPACK_IMPORTED_MODULE_6__["PuntajesService"])); };
QuinceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuinceComponent, selectors: [["app-quince"]], hostBindings: function QuinceComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function QuinceComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], decls: 8, vars: 3, consts: [["class", "divbtn", 4, "ngIf"], [1, "divbtn"], ["type", "button", "class", "save-score", 3, "click", 4, "ngIf"], ["type", "button", 1, "save-score", 3, "click"]], template: function QuinceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Juego del 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-state");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, QuinceComponent_div_6_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 1, ctx.user$));
    } }, directives: [_state_state_component__WEBPACK_IMPORTED_MODULE_7__["StateComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n    width: 620px;\r\n    margin: 0 auto;\r\n  \r\n   \r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n  }\r\n  \r\n  .save-score[_ngcontent-%COMP%]\r\n{\r\n  width: 20%;\r\n  color: black;\r\n  background-color: skyblue;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjOzs7RUFHaEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7O0VBRUEsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJxdWluY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgXHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2F2ZS1zY29yZVxyXG57XHJcbiAgd2lkdGg6IDIwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "QSlT":
/*!*******************************************************************!*\
  !*** ./src/app/components/juegos/quince/state/state.component.ts ***!
  \*******************************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../servicios/board.service */ "ClNL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function StateComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.boardService.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Iniciar partida\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.boardService.initGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Terminar partida\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movimientos: ", ctx_r2.boardService.movesCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tiempo transcurrido: ", ctx_r2.boardService.elapsedSeconds, "");
} }
function StateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Buen Trabajo! Lo lograste en ", ctx_r3.boardService.movesCount, " movimientos y ", ctx_r3.boardService.elapsedSeconds, " segundos!");
} }
class StateComponent {
    constructor(boardService) {
        this.boardService = boardService;
    }
    ngOnInit() {
    }
}
StateComponent.ɵfac = function StateComponent_Factory(t) { return new (t || StateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"])); };
StateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateComponent, selectors: [["app-state"]], decls: 4, vars: 4, consts: [["class", "start", 3, "click", 4, "ngIf"], ["class", "stop", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "start", 3, "click"], [1, "stop", 3, "click"]], template: function StateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StateComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StateComponent_div_3_Template, 3, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.isInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boardService.finished);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["button[_ngcontent-%COMP%] \r\n    {\r\n      border: 1px solid;\r\n      background: white;\r\n      display: inline-block;\r\n      padding: 1em;\r\n      margin-right: 2em;\r\n    }\r\n  \r\n    .start[_ngcontent-%COMP%] {\r\n      color: green;\r\n      border-color: darkseagreen;\r\n    }\r\n  \r\n    .stop[_ngcontent-%COMP%] {\r\n      color: darkred;\r\n      border-color: mistyrose;\r\n    }\r\n  \r\n    div[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n    }\r\n  \r\n    span[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      margin-right: 2em;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJOztNQUVFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxZQUFZO01BQ1osMEJBQTBCO0lBQzVCOztJQUVBO01BQ0UsY0FBYztNQUNkLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUNFLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixpQkFBaUI7SUFDbkIiLCJmaWxlIjoic3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgYnV0dG9uIFxyXG4gICAge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIH1cclxuICBcclxuICAgIC5zdGFydCB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3RvcCB7XHJcbiAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICBib3JkZXItY29sb3I6IG1pc3R5cm9zZTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgfVxyXG5cclxuIl19 */"] });


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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_tablero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../servicios/tablero.service */ "XtWg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tarjeta/tarjeta.component */ "iRT7");





function TableroComponent_app_tarjeta_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-tarjeta", 4);
} if (rf & 2) {
    const tarjeta_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infoTarjeta", tarjeta_r1)("@tarjetasAnimation", tarjeta_r1);
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
TableroComponent.ɵfac = function TableroComponent_Factory(t) { return new (t || TableroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_tablero_service__WEBPACK_IMPORTED_MODULE_2__["TableroService"])); };
TableroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableroComponent, selectors: [["app-tablero"]], inputs: { cantidadFichas: "cantidadFichas" }, decls: 4, vars: 1, consts: [[1, "jumbotron"], [1, "row"], [1, "col-lg-12"], ["role", "button", 3, "infoTarjeta", 4, "ngFor", "ngForOf"], ["role", "button", 3, "infoTarjeta"]], template: function TableroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableroComponent_app_tarjeta_3_Template, 1, 2, "app-tarjeta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tarjetasSeleccionadas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__["TarjetaComponent"]], styles: [".jumbotron[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 1px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.col-lg-12[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n    padding-left: 19px;\r\n    display: contents;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InRhYmxlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbC1sZy0xMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tarjetasAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in')
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
/* harmony import */ var _memotest_servicios_tablero_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./memotest/servicios/tablero.service */ "XtWg");
/* harmony import */ var _memotest_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./memotest/servicios/tarjeta.service */ "arPs");
/* harmony import */ var _quince_quince_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quince/quince.component */ "LU1z");
/* harmony import */ var _quince_board_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quince/board/board.component */ "8ZQZ");
/* harmony import */ var _quince_state_state_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quince/state/state.component */ "QSlT");
/* harmony import */ var _quince_tile_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quince/tile/tile.component */ "Y5+Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class JuegosModule {
}
JuegosModule.ɵfac = function JuegosModule_Factory(t) { return new (t || JuegosModule)(); };
JuegosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: JuegosModule });
JuegosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _memotest_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_11__["TarjetaService"],
        _memotest_servicios_tablero_service__WEBPACK_IMPORTED_MODULE_10__["TableroService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](JuegosModule, { declarations: [_juegos_component__WEBPACK_IMPORTED_MODULE_2__["JuegosComponent"],
        _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__["TatetiComponent"],
        _tateti_celda_celda_component__WEBPACK_IMPORTED_MODULE_4__["CeldaComponent"],
        _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__["PiedraPapelTijeraComponent"],
        _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_6__["MemotestComponent"],
        _memotest_cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_7__["CronometroComponent"],
        _memotest_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_8__["TableroComponent"],
        _memotest_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_9__["TarjetaComponent"],
        _quince_quince_component__WEBPACK_IMPORTED_MODULE_12__["QuinceComponent"],
        _quince_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"],
        _quince_state_state_component__WEBPACK_IMPORTED_MODULE_14__["StateComponent"],
        _quince_tile_tile_component__WEBPACK_IMPORTED_MODULE_15__["TileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"]] }); })();


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

/***/ "Y5+Y":
/*!*****************************************************************!*\
  !*** ./src/app/components/juegos/quince/tile/tile.component.ts ***!
  \*****************************************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TileComponent {
    constructor() { }
    ngOnInit() {
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { value: "value", index: "index" }, decls: 2, vars: 1, consts: [[1, "container"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value ? ctx.value : "\u00A0", "\n");
    } }, styles: ["[_nghost-%COMP%] {\r\n    border: 1px dotted rgb(0, 0, 0);\r\n    color: gray;\r\n    display: inline-block;\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    color: rgb(0, 0, 0);\r\n    background-color: orange;\r\n    display: inline-block;\r\n    font-family: sans-serif;\r\n    font-size: 40px;\r\n    width: 100%;\r\n    line-height: 150px;\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCByZ2IoMCwgMCwgMCk7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */"] });


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
/* harmony import */ var _quince_quince_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quince/quince.component */ "LU1z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'tateti', component: _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__["TatetiComponent"] },
    { path: 'piedra-papel-tijera', component: _piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_2__["PiedraPapelTijeraComponent"] },
    { path: 'memotest', component: _memotest_memotest_component__WEBPACK_IMPORTED_MODULE_4__["MemotestComponent"] },
    { path: 'quince', component: _quince_quince_component__WEBPACK_IMPORTED_MODULE_5__["QuinceComponent"] },
    { path: '', component: _juegos_component__WEBPACK_IMPORTED_MODULE_1__["JuegosComponent"] },
];
class JuegosRoutingModule {
}
JuegosRoutingModule.ɵfac = function JuegosRoutingModule_Factory(t) { return new (t || JuegosRoutingModule)(); };
JuegosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: JuegosRoutingModule });
JuegosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](JuegosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/tarjeta.service */ "arPs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




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
    constructor(tarjetaSvc) {
        this.tarjetaSvc = tarjetaSvc;
        this.tiempoRestante = null;
        this.timer = null;
        this.tiempoTerminado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tiempoGuardado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set tiempoMinutos(tiempoMinutos) {
        this._tiempoMinutos = tiempoMinutos;
    }
    set cantFichas(cantFichas) {
        this._cantFichas = cantFichas;
    }
    set juegoIniciado(juegoIniciado) {
        this._juegoIniciado = juegoIniciado;
        if (this._juegoIniciado) {
            this.tiempoRestante = new Date(this.tiempoRestante.setMinutes(this.tiempoRestante.getMinutes() + this._tiempoMinutos));
            this.descuento = this.tiempoRestante;
            this.iniciar();
        }
        else {
            this.detener();
        }
    }
    enviarTiempo(value) {
        this.tiempoGuardado.emit(value);
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
                if (this.tarjetaSvc.aciertos != this._cantFichas) {
                    this.tiempoRestante = new Date(this.tiempoRestante.setSeconds(this.tiempoRestante.getSeconds() - 1));
                }
                else {
                    this.tiempoRestante = this.tiempoRestante;
                    let min = this.descuento.getMinutes() - this.tiempoRestante.getMinutes();
                    let seg = this.descuento.getSeconds() - this.tiempoRestante.getSeconds();
                    if (seg < 10) {
                        this.guardarTiempo = min + ":0" + seg;
                    }
                    else {
                        this.guardarTiempo = min + ":" + seg;
                    }
                    this.enviarTiempo(this.guardarTiempo);
                }
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
CronometroComponent.ɵfac = function CronometroComponent_Factory(t) { return new (t || CronometroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_1__["TarjetaService"])); };
CronometroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CronometroComponent, selectors: [["app-cronometro"]], inputs: { tiempoMinutos: "tiempoMinutos", cantFichas: "cantFichas", juegoIniciado: "juegoIniciado" }, outputs: { tiempoTerminado: "tiempoTerminado", tiempoGuardado: "tiempoGuardado" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-4", "col-md-offset-4"], [1, "jumbotron", 2, "padding-top", "0", "padding-bottom", "0"], [1, "text-center"]], template: function CronometroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CronometroComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._juegoIniciado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb25vbWV0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY3Jvbm9tZXRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufSJdfQ== */"] });


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
    constructor() {
    }
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
            console.log(this.aciertos);
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

/***/ "fZkn":
/*!**********************************!*\
  !*** ./src/app/clases/puntos.ts ***!
  \**********************************/
/*! exports provided: Puntos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Puntos", function() { return Puntos; });
class Puntos {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/tarjeta.service */ "arPs");
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
TarjetaComponent.ɵfac = function TarjetaComponent_Factory(t) { return new (t || TarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_1__["TarjetaService"])); };
TarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TarjetaComponent, selectors: [["app-tarjeta"]], inputs: { infoTarjeta: "infoTarjeta" }, decls: 2, vars: 8, consts: [[1, "col-md-12", "tarjeta", 3, "click"], ["id", "ficha", "aria-hidden", "true", 1, "fa", "fa-3x", 3, "hidden", "ngClass"]], template: function TarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarjetaComponent_Template_div_click_0_listener() { return ctx.mostrarTarjeta(ctx._infoTarjeta); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("flipped", ctx._infoTarjeta.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("front", ctx._infoTarjeta.visible)("back", !ctx._infoTarjeta.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx._infoTarjeta.visible)("ngClass", ctx._infoTarjeta.nombre);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["#ficha[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    position:relative;\r\n    top: calc(50% - 25px);\r\n    \r\n}\r\n\r\n.tarjeta[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 6px;\r\n    margin-right: 9px;\r\n    text-align: center;\r\n    margin-top: 9px;\r\n    transition: transform 1s;\r\n    transform-style: preserve-3d;\r\n    background-color: rgba(255, 123, 0, 0.664);\r\n}\r\n\r\n.tarjeta.flipped[_ngcontent-%COMP%] {\r\n    transform: rotateY( 180deg );\r\n    background-color: #007e87;\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n    transform: rotateZ( 0deg );\r\n}\r\n\r\n.front[_ngcontent-%COMP%] {\r\n    transform: rotateY( 180deg );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmpldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJ0YXJqZXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmljaGEge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgIFxyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyMywgMCwgMC42NjQpO1xyXG59XHJcblxyXG4udGFyamV0YS5mbGlwcGVkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTg3O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooIDBkZWcgKTtcclxufVxyXG5cclxuLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbn0iXX0= */"] });


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

/***/ "l8U7":
/*!**************************************************!*\
  !*** ./src/app/components/juegos/quince/defs.ts ***!
  \**************************************************/
/*! exports provided: DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, keyToDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_UP", function() { return DIRECTION_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_DOWN", function() { return DIRECTION_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyToDirection", function() { return keyToDirection; });
const DIRECTION_UP = 'up';
const DIRECTION_DOWN = 'down';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const keyToDirection = {
    ArrowUp: DIRECTION_UP,
    ArrowDown: DIRECTION_DOWN,
    ArrowLeft: DIRECTION_LEFT,
    ArrowRight: DIRECTION_RIGHT,
};


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
/* harmony import */ var _clases_puntos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../clases/puntos */ "fZkn");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/tarjeta.service */ "arPs");
/* harmony import */ var _services_puntajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/puntajes.service */ "q4pn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cronometro/cronometro.component */ "ao1Y");
/* harmony import */ var _tablero_tablero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tablero/tablero.component */ "QklA");










function MemotestComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MemotestComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const nivel_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.nivelSeleccionado = nivel_r4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nivel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](nivel_r4.nombre);
} }
function MemotestComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Informaci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " El juego ha comenzado! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MemotestComponent_app_tablero_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-tablero", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cantidadFichas", ctx_r2.nivelSeleccionado ? ctx_r2.nivelSeleccionado.cantidadFichas : null);
} }
function MemotestComponent_div_22_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MemotestComponent_div_22_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.guardarPuntaje(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MemotestComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MemotestComponent_div_22_button_1_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", user_r7);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class MemotestComponent {
    constructor(tarjetaSvc, authSvc, puntajeSvc) {
        this.tarjetaSvc = tarjetaSvc;
        this.authSvc = authSvc;
        this.puntajeSvc = puntajeSvc;
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
        this.puntaje = new _clases_puntos__WEBPACK_IMPORTED_MODULE_0__["Puntos"]();
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
        this.juegoIniciado = false;
        this.authSvc.getCurrentUser().subscribe(user => {
            if (user != null) {
                this.puntaje.usuario = user.displayName;
                this.puntaje.fecha = new Date().toLocaleDateString();
                this.puntaje.juego = "memotest";
            }
        });
    }
    obtenerTiempo(e) {
        console.log(e);
        this.tiempoPuntaje = e;
    }
    guardarPuntaje() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Desea guardar este puntaje?',
            showDenyButton: true,
            confirmButtonText: `Guardar`,
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (this.nivelSeleccionado != null) {
                if (result.isConfirmed && (this.tarjetaSvc.aciertos == this.nivelSeleccionado.cantidadFichas)) {
                    this.puntaje.tiempo = this.tiempoPuntaje;
                    this.puntajeSvc.AgregarPuntaje(this.puntaje);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('¡Se guardo el puntaje!', '', 'success');
                }
                else {
                    if (result.isDenied) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No se ha guardado el puntaje', '', 'info');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('ERROR', 'Debe jugar y encontrar todas las piezas al menos 1 vez!', 'error');
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('ERROR', 'Debe jugar y encontrar todas las piezas al menos 1 vez!', 'error');
            }
        });
    }
    iniciar() {
        this.puntaje.dificultad = this.nivelSeleccionado.nombre;
        this.juegoIniciado = true;
        this.mostrarAlerta = true;
        this.tarjetaSvc.aciertos = 0;
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
MemotestComponent.ɵfac = function MemotestComponent_Factory(t) { return new (t || MemotestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_4__["TarjetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_puntajes_service__WEBPACK_IMPORTED_MODULE_5__["PuntajesService"])); };
MemotestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MemotestComponent, selectors: [["app-memotest"]], inputs: { cantFichas: "cantFichas" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], decls: 24, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "container-fluid"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "ngClass"], [1, "caret"], [1, "dropdown-menu"], ["class", "dropdown-item", "role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "navbar-form", "navbar-right"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "container"], ["class", "alert alert-dismissible alert-warning fade in", "role", "alert", 4, "ngIf"], [3, "tiempoMinutos", "juegoIniciado", "cantFichas", "tiempoTerminado", "tiempoGuardado"], [3, "cantidadFichas", 4, "ngIf"], [4, "ngIf"], ["role", "button", 1, "dropdown-item", 3, "click"], ["role", "alert", 1, "alert", "alert-dismissible", "alert-warning", "fade", "in"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "cantidadFichas"], ["type", "button", "class", "save-score", 3, "click", 4, "ngIf"], ["type", "button", 1, "save-score", 3, "click"]], template: function MemotestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Seleccione un nivel para empezar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MemotestComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MemotestComponent_Template_button_click_13_listener() { return ctx.iniciar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MemotestComponent_Template_button_click_16_listener() { return ctx.detener(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Finalizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, MemotestComponent_div_19_Template, 7, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-cronometro", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tiempoTerminado", function MemotestComponent_Template_app_cronometro_tiempoTerminado_20_listener() { return ctx.detener(); })("tiempoGuardado", function MemotestComponent_Template_app_cronometro_tiempoGuardado_20_listener($event) { return ctx.obtenerTiempo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, MemotestComponent_app_tablero_21_Template, 1, 1, "app-tablero", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MemotestComponent_div_22_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.nivelSeleccionado != null && ctx.juegoIniciado));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.nivelSeleccionado ? ctx.nivelSeleccionado.nombre : "Nivel", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.niveles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.juegoIniciado || !ctx.nivelSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.juegoIniciado);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrarAlerta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tiempoMinutos", ctx.nivelSeleccionado ? ctx.nivelSeleccionado.tiempoMinutos : null)("juegoIniciado", ctx.juegoIniciado)("cantFichas", ctx.nivelSeleccionado ? ctx.nivelSeleccionado.cantidadFichas : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.juegoIniciado);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 11, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_7__["CronometroComponent"], _tablero_tablero_component__WEBPACK_IMPORTED_MODULE_8__["TableroComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".alert[_ngcontent-%COMP%]{\r\n    position:fixed; \r\n    bottom: 0px; \r\n    left: 0px; \r\n    width: 100%;\r\n    z-index:9999; \r\n    border-radius:0px;\r\n    margin-bottom: 0\r\n}\r\n\r\n.save-score[_ngcontent-%COMP%]\r\n{\r\n  width: 20%;\r\n  color: black;\r\n  background-color: skyblue;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbW90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoibWVtb3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydHtcclxuICAgIHBvc2l0aW9uOmZpeGVkOyBcclxuICAgIGJvdHRvbTogMHB4OyBcclxuICAgIGxlZnQ6IDBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6OTk5OTsgXHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLnNhdmUtc2NvcmVcclxue1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcblxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _clases_puntos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clases/puntos */ "fZkn");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_puntajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/puntajes.service */ "q4pn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _celda_celda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./celda/celda.component */ "kXzx");










function TatetiComponent_section_9_div_4_app_celda_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-celda", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TatetiComponent_section_9_div_4_app_celda_1_Template_app_celda_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const col_r6 = ctx.$implicit; const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.move(row_r4, col_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("row", row_r4)("col", col_r6)("piece", ctx_r5.board[row_r4][col_r6]);
} }
const _c0 = function () { return [0, 1, 2]; };
function TatetiComponent_section_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TatetiComponent_section_9_div_4_app_celda_1_Template, 1, 3, "app-celda", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function TatetiComponent_section_9_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TatetiComponent_section_9_div_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r13.guardarPuntaje(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TatetiComponent_section_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TatetiComponent_section_9_div_8_button_1_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r11);
} }
function TatetiComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TatetiComponent_section_9_div_4_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TatetiComponent_section_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.resetScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Reiniciar Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TatetiComponent_section_9_div_8_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx_r1.statusMessage, " (", ctx_r1.playerScore, " : ", ctx_r1.aiScore, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, ctx_r1.user$));
} }
class TatetiComponent {
    constructor(svc, authSvc, puntajeSvc) {
        this.svc = svc;
        this.authSvc = authSvc;
        this.puntajeSvc = puntajeSvc;
        this.player = _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X;
        this.aiLevelEasy = true;
        //puntos jugador
        this.playerScore = 0;
        this.aiScore = 0;
        this.puntaje = new _clases_puntos__WEBPACK_IMPORTED_MODULE_1__["Puntos"]();
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
        this.authSvc.getCurrentUser().subscribe(user => {
            if (user != null) {
                this.puntaje.usuario = user.displayName;
                this.puntaje.fecha = new Date().toLocaleDateString();
                this.puntaje.juego = "tateti";
            }
        });
    }
    choosePlayer(checked) {
        this.player = checked ? _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].X : _services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["Piece"].O;
    }
    // chooseLevel(checked: boolean) {
    //   this.aiLevelEasy = checked;
    // }
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
    resetScore() {
        this.aiScore = 0;
        this.playerScore = 0;
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
                if (this.currentPlayer == this.player) {
                    this.playerScore++;
                }
                else {
                    this.aiScore++;
                }
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
    guardarPuntaje() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Desea guardar este puntaje?',
            showDenyButton: true,
            confirmButtonText: `Guardar`,
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed && (this.playerScore != 0 || this.aiScore != 0)) {
                this.puntaje.victorias = this.playerScore;
                this.puntaje.derrotas = this.aiScore;
                this.puntajeSvc.AgregarPuntaje(this.puntaje);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('¡Se guardo el puntaje!', '', 'success');
            }
            else {
                if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('No se ha guardado el puntaje', '', 'info');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('ERROR', 'Debe jugar al menos 1 vez!', 'error');
                }
            }
        });
    }
}
TatetiComponent.ɵfac = function TatetiComponent_Factory(t) { return new (t || TatetiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tateti_service__WEBPACK_IMPORTED_MODULE_0__["TatetiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_puntajes_service__WEBPACK_IMPORTED_MODULE_5__["PuntajesService"])); };
TatetiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TatetiComponent, selectors: [["app-tateti"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], decls: 10, vars: 1, consts: [[2, "text-align", "center"], [2, "margin", "0.5rem"], ["type", "checkbox", "id", "player", "name", "player", "checked", "", 3, "click"], ["c", ""], ["for", "player", 2, "font-size", "1.25rem"], ["type", "button", 1, "new-game", 3, "click"], [4, "ngIf"], [1, "status"], [1, "board"], ["class", "board-row", 4, "ngFor", "ngForOf"], ["type", "button", 1, "reset-score", 3, "click"], ["class", "divbtn", 4, "ngIf"], [1, "board-row"], [3, "row", "col", "piece", "click", 4, "ngFor", "ngForOf"], [3, "row", "col", "piece", "click"], [1, "divbtn"], ["type", "button", "class", "save-score", 3, "click", 4, "ngIf"], ["type", "button", 1, "save-score", 3, "click"]], template: function TatetiComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TatetiComponent_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return ctx.choosePlayer(_r0.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Jugar primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TatetiComponent_Template_button_click_7_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Comenzar nuevo juego ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TatetiComponent_section_9_Template, 10, 8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _celda_celda_component__WEBPACK_IMPORTED_MODULE_7__["CeldaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".board[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  color: white;\r\n  \r\n  \r\n}\r\n\r\n.board-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: grey;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  \r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  \r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.new-game[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  color: #fff;\r\n  background-color: #ff7b00;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.reset-score[_ngcontent-%COMP%]\r\n{\r\n  width: 20%;\r\n  color: #fff;\r\n  background-color: #ff7b00;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n  \r\n  \r\n}\r\n\r\n.save-score[_ngcontent-%COMP%]\r\n{\r\n  width: 20%;\r\n  color: black;\r\n  background-color: skyblue;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-left: 40%;\r\n\r\n}\r\n\r\n.new-game[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhdGV0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCOztBQUU5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCO2dFQUM4RDtBQUNoRTs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7OztBQUdsQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YXRldGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyAqL1xyXG4gIFxyXG59XHJcblxyXG4uYm9hcmQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG59XHJcbi5zdGF0dXMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4ubmV3LWdhbWUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2IwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5yZXNldC1zY29yZVxyXG57XHJcbiAgd2lkdGg6IDIwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YjAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG4uc2F2ZS1zY29yZVxyXG57XHJcbiAgd2lkdGg6IDIwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuXHJcbn1cclxuXHJcbi5uZXctZ2FtZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=components-juegos-juegos-module.js.map