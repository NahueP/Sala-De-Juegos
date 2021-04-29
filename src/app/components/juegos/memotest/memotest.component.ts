import { Component, OnInit  } from '@angular/core';
import { TarjetaService } from './servicios/tarjeta.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
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

  constructor(private tarjetaSvc : TarjetaService) {
    
  }

  ngOnInit() {
    this.juegoIniciado = false;
    
  }

  iniciar() {
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
    this.nivelSeleccionado = null;
  }

}
