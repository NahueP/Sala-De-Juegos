import { Component, OnInit } from '@angular/core';
import { PuntajesService } from '../../../services/puntajes.service';
import { Puntos } from '../../../clases/puntos';
import { Usuario } from '../../../clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css'],
  providers: [AuthService]
})
export class PiedraPapelTijeraComponent implements OnInit {

  scores = [0 , 0]; // store the scores. index 0 is you. index 1 is player 2.
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  
  playerSelected = -1;
  enemySelected  = -1;
  loading= false; 
  isResultShow = false;
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 

  isClicked : boolean = false;

  puntaje : Puntos = new Puntos();

  public user$ : Observable<any>= this.authSvc.afAuth.user;


  constructor(private authSvc : AuthService, private puntajeSvc : PuntajesService) { }


  pick( weapon: number): void {
    
    if(this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;
   
   //create a delay to simulate enemy's turn.
    setTimeout( () => {
      this.loading = false;
      // generate a number from 0 -2 
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }
 
  reset(): void {
   this.scores = [0,0];
   this.playerSelected = -1;
   this.enemySelected = -1;
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
   // if you and the enemy have the same weapon, then it is a tie.
    if( playerPick ==  enemyPick)
     {
     this.theResult = 2;
   }
   
     else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
       // YOU WIN
       this.theResult = 0;
       this.scores[0] = this.scores[0]+1;
     }
     else{
       // YOU LOSE
       this.theResult = 1;
         this.scores[1] = this.scores[1]+1;
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
      if (result.isConfirmed && (this.scores[0] != 0 || this.scores[1] != 0)) 
      {
        this.puntaje.victorias = this.scores[0];
        this.puntaje.derrotas = this.scores[1];

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
  

  ngOnInit(): void {
    this.authSvc.getCurrentUser().subscribe(user=>{
      if(user != null)
      {
        this.puntaje.usuario = user.displayName;
        this.puntaje.fecha = new Date().toLocaleDateString();
        this.puntaje.juego = "piedra-papel-tijera";
      }
    });
  }

}
