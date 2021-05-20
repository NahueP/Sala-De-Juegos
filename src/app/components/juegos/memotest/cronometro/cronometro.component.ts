import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TarjetaService } from '../servicios/tarjeta.service';


@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  tiempoRestante: Date = null;
  timer: any = null;
  guardarTiempo : string;
  _tiempoMinutos: number;
  descuento : Date;
  _cantFichas : number;

  @Input()
  set tiempoMinutos(tiempoMinutos) {
    this._tiempoMinutos = tiempoMinutos;
  }

  @Input() set cantFichas(cantFichas) {
    this._cantFichas = cantFichas;
  }
  
  @Input()
  set juegoIniciado(juegoIniciado) 
  {
    this._juegoIniciado = juegoIniciado;
    if (this._juegoIniciado) 
    {
      this.tiempoRestante = new Date(this.tiempoRestante.setMinutes(
        this.tiempoRestante.getMinutes() + this._tiempoMinutos
      ));
      this.descuento = this.tiempoRestante;
      this.iniciar();
    }
    else 
    {
      this.detener();
    }
  }
  _juegoIniciado: boolean;

  @Output() tiempoTerminado = new EventEmitter<any>();

  @Output() tiempoGuardado = new EventEmitter<any>();

  enviarTiempo(value: string) {
    this.tiempoGuardado.emit(value);
  }

  constructor(private tarjetaSvc : TarjetaService) { }

  ngOnInit() {
    this.detener();
  }

  iniciar() {
    this.timer = setInterval(() => {
      if (this.tiempoRestante.getMinutes() === 0 && this.tiempoRestante.getSeconds() === 0)
      {
        this.detener();
      } 
      else 
      {
       if(this.tarjetaSvc.aciertos != this._cantFichas)
       {
        this.tiempoRestante = new Date(this.tiempoRestante.setSeconds(this.tiempoRestante.getSeconds() - 1)); 
       }
       else
       {
        this.tiempoRestante = this.tiempoRestante;

        let min = this.descuento.getMinutes() - this.tiempoRestante.getMinutes();
        let seg = this.descuento.getSeconds() - this.tiempoRestante.getSeconds();

        if(seg < 10)
        {
          this.guardarTiempo = min + ":0" + seg;
        }
        else
        {
          this.guardarTiempo = min + ":" + seg;
        }

        this.enviarTiempo(this.guardarTiempo);

       }
        
      }
    }, 1000); 
  }

  detener() {
    if (this.timer) 
    {
      clearTimeout(this.timer);
     
      this.timer = null;
      
    }
    this.tiempoRestante = new Date(0, 0, 0, 0, 0, 0, 0);
    this.tiempoTerminado.emit();
  }

}
