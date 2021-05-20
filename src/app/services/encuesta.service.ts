import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})

export class EncuestaService {

  rutaDeLaColeccion = '/encuestas';
  referenciaAlaColeccion : AngularFireList<Encuesta>;

  constructor(private encuestSvc : AngularFireDatabase) 
  {
    this.referenciaAlaColeccion = encuestSvc.list(this.rutaDeLaColeccion);
  }

  Crear(encuesta:Encuesta):any
  {
    return this.referenciaAlaColeccion.push(encuesta);
  }


}
