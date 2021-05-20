import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Puntos } from '../clases/puntos';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {

  rutaDeLaColeccion = "/puntajes";
  referenciaAlaColeccion: AngularFirestoreCollection<Puntos>;
  


  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    



  }


  

  AgregarPuntaje(puntos: Puntos): any {
    return this.referenciaAlaColeccion.add({ ...puntos });
  }

  GetAll(): AngularFirestoreCollection<Puntos> {

    return this.referenciaAlaColeccion;
    
  }
}
