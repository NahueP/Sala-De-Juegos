import { Component, OnInit, HostListener } from '@angular/core';
import { BoardService } from './servicios/board.service';
import { keyToDirection } from './defs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajesService } from '../../../services/puntajes.service';
import { Puntos } from '../../../clases/puntos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quince',
  templateUrl: './quince.component.html',
  styleUrls: ['./quince.component.css'],
  providers: [AuthService]
})
export class QuinceComponent implements OnInit {

  title = 'Fifteen Game';
  
  puntaje : Puntos = new Puntos();
  public user$ : Observable<any>= this.authSvc.afAuth.user;

  constructor(public boardService: BoardService,private authSvc : AuthService, private puntajeSvc : PuntajesService) {}

  ngOnInit() {
    this.boardService.initGame();

    this.authSvc.getCurrentUser().subscribe(user=>{
      if(user != null)
      {
        this.puntaje.usuario = user.displayName;
        this.puntaje.fecha = new Date().toLocaleDateString();
        this.puntaje.juego = "quince";
      }
    });
  }

  guardarPuntaje()
  {
    Swal.fire({
      title: '¿Desea guardar este puntaje?',
      showDenyButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
    
      if (result.isConfirmed && this.boardService.finished == true)  
      {
        this.puntaje.tiempo = this.boardService.elapsedSeconds.toString();
        this.puntaje.movimientos = this.boardService.movesCount;
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
          Swal.fire('ERROR', 'Debe jugar y terminar el puzzle al menos 1 vez!', 'error');
        }
      }
    
  })
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.boardService.isInProgress()) {
      switch (event.key) {
        case 'r':
          this.boardService.initGame();
          return;
      }

      const direction = keyToDirection[event.key];
      if (direction) {
        this.boardService.move(direction);
      }
    } else {
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
