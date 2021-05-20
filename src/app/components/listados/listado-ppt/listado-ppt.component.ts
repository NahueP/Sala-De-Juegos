import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Puntos } from 'src/app/clases/puntos';
import { PuntajesService } from '../../../services/puntajes.service';


@Component({
  selector: 'app-listado-ppt',
  templateUrl: './listado-ppt.component.html',
  styleUrls: ['./listado-ppt.component.css']
})
export class ListadoPptComponent implements OnInit {

  puntajeFire$ : Observable<Puntos[]>;

  constructor(private puntajeSvc : PuntajesService) 
  {
    this.puntajeFire$ = this.puntajeSvc.GetAll().valueChanges();
    
  }

  ngOnInit(): void {
  }

}
