import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Puntos } from 'src/app/clases/puntos';
import { PuntajesService } from '../../../services/puntajes.service';

@Component({
  selector: 'app-listado-tateti',
  templateUrl: './listado-tateti.component.html',
  styleUrls: ['./listado-tateti.component.css']
})
export class ListadoTatetiComponent implements OnInit {

  puntajeFire$: Observable<Puntos[]>;

  constructor(private puntajeSvc : PuntajesService) 
  {
    this.puntajeFire$ = this.puntajeSvc.GetAll().valueChanges();
    
  }

  ngOnInit(): void {
  }

}
