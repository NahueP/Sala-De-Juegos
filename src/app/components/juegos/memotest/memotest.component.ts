import { Component, OnInit, Input  } from '@angular/core';
import { TarjetaService } from './servicios/tarjeta.service';
import { PuntajesService } from '../../../services/puntajes.service';
import { Puntos } from '../../../clases/puntos';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  providers: [AuthService]
})
export class MemotestComponent implements OnInit {
 
  title = 'MemoTest';
  juegoIniciado: boolean;
  mostrarAlerta :boolean = false;
  niveles = [
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
  nombre: string = null;
  nivelSeleccionado: any = null;

  puntaje : Puntos = new Puntos();
  tiempoPuntaje : string;
  public user$ : Observable<any>= this.authSvc.afAuth.user;

  @Input() cantFichas: number;

  constructor(private tarjetaSvc : TarjetaService, private authSvc : AuthService, private puntajeSvc : PuntajesService) {
    
  }

  ngOnInit() {
    this.juegoIniciado = false;

    this.authSvc.getCurrentUser().subscribe(user=>{
      if(user != null)
      {
        this.puntaje.usuario = user.displayName;
        this.puntaje.fecha = new Date().toLocaleDateString();
        this.puntaje.juego = "memotest";
      }
    });
    
  }

  obtenerTiempo(e)
  {
    console.log(e);
    this.tiempoPuntaje = e;
  }
  
  guardarPuntaje()
  {
    Swal.fire({
      title: '¿Desea guardar este puntaje?',
      showDenyButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
    if(this.nivelSeleccionado != null)
    {
      if (result.isConfirmed && (this.tarjetaSvc.aciertos == this.nivelSeleccionado.cantidadFichas)) 
      {
        this.puntaje.tiempo = this.tiempoPuntaje;
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
          Swal.fire('ERROR', 'Debe jugar y encontrar todas las piezas al menos 1 vez!', 'error');
        }
      }
    }
    else
    {
      Swal.fire('ERROR', 'Debe jugar y encontrar todas las piezas al menos 1 vez!', 'error');
    }
  })
  }



  iniciar() {
    this.puntaje.dificultad = this.nivelSeleccionado.nombre;
    this.juegoIniciado = true;
    this.mostrarAlerta = true;
    this.tarjetaSvc.aciertos = 0;
    setTimeout(function() {
      this.mostrarAlerta = false;
    }.bind(this), 2000);
  }

  detener() {
    this.juegoIniciado = false;
    this.nombre = null;
    this.nivelSeleccionado = null
  }

}
