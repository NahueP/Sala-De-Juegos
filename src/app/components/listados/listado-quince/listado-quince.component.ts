import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Puntos } from 'src/app/clases/puntos';
import { PuntajesService } from '../../../services/puntajes.service';

@Component({
  selector: 'app-listado-quince',
  templateUrl: './listado-quince.component.html',
  styleUrls: ['./listado-quince.component.css']
})
export class ListadoQuinceComponent implements OnInit {

  puntajeFire$ : Observable<Puntos[]>;

  constructor(private puntajeSvc : PuntajesService) 
  {
    this.puntajeFire$ = this.puntajeSvc.GetAll().valueChanges();
    
  }

  ngOnInit(): void {
  }

}
