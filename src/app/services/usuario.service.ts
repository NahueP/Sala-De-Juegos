import { Injectable } from '@angular/core';
import { Usuario } from './../clases/usuario';
import { AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private rutaDeLaColeccion  = '/usuariosFire';
  referenciaAlaColeccion : AngularFirestoreCollection <any>;

  constructor(private db: AngularFirestore)
  {
    this.referenciaAlaColeccion = db.collection(this.rutaDeLaColeccion);
  }

  ObtenerTodos() : AngularFirestoreCollection<Usuario>
  {
    return this.referenciaAlaColeccion;
  }

  Crear(usuario: Usuario) : any
  {
    return this.referenciaAlaColeccion.add({...usuario});
  }

  ObtenerEmailUsuario(email: string)
  {
    return this.referenciaAlaColeccion.ref.get().then((doc)=>{
      if(!doc.empty)
      {
        console.log(doc.docs[0].data());
      }
    });
  }


}
