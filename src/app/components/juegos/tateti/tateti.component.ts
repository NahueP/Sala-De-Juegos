import { Component, OnInit } from '@angular/core';
import { TatetiService } from './../../../services/tateti.service';
import { Piece } from './../../../services/tateti.service';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css'],
  
  
})
export class TatetiComponent implements OnInit {

  private currentPlayer: Piece;
  private player: Piece = Piece.X;
  gameOver: boolean;
  board: Piece[][];
  statusMessage: string;
  aiLevelEasy = true;

  constructor(private readonly svc: TatetiService,) {}

  

  ngOnInit(): void {}

  choosePlayer(checked: boolean) {
    this.player = checked ? Piece.X : Piece.O;
  }
  chooseLevel(checked: boolean) {
    this.aiLevelEasy = checked;
  }

  newGame() {
    this.currentPlayer = Piece.X;
    this.gameOver = false;
    this.board = [
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY]
    ];

    this.statusMessage = `Turno de ${this.currentPlayer}`;
    if (this.player !== this.currentPlayer) {
      this.aiTurn();
    }
  }

  move(row: number, col: number) {
    if (!this.gameOver && this.board[row][col] === Piece.EMPTY) {
      this.board[row][col] = this.currentPlayer;
      if (this.svc.isDraw(this.board)) {
        this.statusMessage = `Es un empate`;
        this.gameOver = true;
      } else if (this.svc.isWin(this.board)) {
        this.statusMessage = `Gano Jugador ${this.currentPlayer}!`;
        this.gameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === Piece.O ? Piece.X : Piece.O;
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
    } else {
      const bestMove = this.svc.minimax(
        this.board,
        this.aiLevelEasy && emptyCells > 5 ? 5 : emptyCells,
        this.player !== Piece.X
      );
      this.move(bestMove.row, bestMove.col);
    }
  }


  private logBoard() {
    for (let row = 0; row < this.board.length; row++) {
      console.log(this.board[row]);
    }
  }

}

