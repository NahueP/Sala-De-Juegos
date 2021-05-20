import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Puntos } from 'src/app/clases/puntos';
import { PuntajesService } from '../../../services/puntajes.service';

@Component({
  selector: 'app-listado-memotest',
  templateUrl: './listado-memotest.component.html',
  styleUrls: ['./listado-memotest.component.css']
})
export class ListadoMemotestComponent implements OnInit {

  puntajeFire$ : Observable<Puntos[]>;

  constructor(private puntajeSvc : PuntajesService) 
  {
    this.puntajeFire$ = this.puntajeSvc.GetAll().valueChanges();
    
  }

  ngOnInit(): void {
  }

}
