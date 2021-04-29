import { Component, OnInit, Input} from '@angular/core';
import { ITarjeta } from './../interface/itarjeta';
import { TarjetaService } from '../servicios/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  
})
export class TarjetaComponent implements OnInit {

  @Input()
  set infoTarjeta(infoTarjeta:any)
  {
    this._infoTarjeta = infoTarjeta;
  }
  _infoTarjeta: ITarjeta;

  constructor(private actions: TarjetaService) { }

  ngOnInit() {
  }

  mostrarTarjeta(tarjeta) {
    if (tarjeta.visible) {
      return;
    }
    this.actions.mostrarTarjeta(tarjeta);
  }

}