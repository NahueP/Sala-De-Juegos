import { Component, OnInit } from '@angular/core';
import { TatetiService } from './../../../services/tateti.service';
import { Piece } from './../../../services/tateti.service';
import { PuntajesService } from '../../../services/puntajes.service';
import { Puntos } from '../../../clases/puntos';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css'],
  providers: [AuthService]
  
  
})
export class TatetiComponent implements OnInit {

  private currentPlayer: Piece;
  private player: Piece = Piece.X;
  gameOver: boolean;
  board: Piece[][];
  statusMessage: string;
  aiLevelEasy = true;

  //puntos jugador
  playerScore : number=0;
  aiScore : number=0;

  puntaje : Puntos = new Puntos();

  public user$ : Observable<any>= this.authSvc.afAuth.user;

  constructor(private readonly svc: TatetiService, private authSvc: AuthService, private puntajeSvc : PuntajesService)
  {
    
  }

  

  ngOnInit(): void {
  
      this.authSvc.getCurrentUser().subscribe(user=>{
      if(user != null)
      {
        this.puntaje.usuario = user.displayName;
        this.puntaje.fecha = new Date().toLocaleDateString();
        this.puntaje.juego = "tateti";
      }
    });
    

  }

  choosePlayer(checked: boolean) {
    this.player = checked ? Piece.X : Piece.O;
  }
  // chooseLevel(checked: boolean) {
  //   this.aiLevelEasy = checked;
  // }

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

  resetScore()
  {
    this.aiScore = 0;
    this.playerScore = 0;
  }

  move(row: number, col: number) {
    if (!this.gameOver && this.board[row][col] === Piece.EMPTY) 
    {
      this.board[row][col] = this.currentPlayer;
      if (this.svc.isDraw(this.board)) 
      {
        this.statusMessage = `Es un empate`;
        this.gameOver = true;
      } 
      else if (this.svc.isWin(this.board)) 
      {
        this.statusMessage = `Gano Jugador ${this.currentPlayer}!`;
        if(this.currentPlayer == this.player)
        {
          this.playerScore++;
        }
        else
        {
          this.aiScore++;
        }
        this.gameOver = true;
      } 
      else 
      {
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

  guardarPuntaje()
  {
    Swal.fire({
      title: '¿Desea guardar este puntaje?',
      showDenyButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed && (this.playerScore != 0 || this.aiScore != 0)) 
      {
        this.puntaje.victorias = this.playerScore;
        this.puntaje.derrotas = this.aiScore;
        this.puntajeSvc.AgregarPuntaje(this.puntaje);
        
        Swal.fire('¡Se guardo el puntaje!', '', 'success');
        
      } 
      else 
      {
        if (result.isDenied) 
        {
          Swal.fire('No se ha guardado el puntaje', '', 'info');
        }
        else
        {
          Swal.fire('ERROR', 'Debe jugar al menos 1 vez!', 'error');
        }
      }
    })

    
  }

}

