import { Injectable } from '@angular/core';
import { Mensaje } from './../clases/mensaje';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  chatMensajes: AngularFireList<Mensaje>;
  


  constructor(private db: AngularFireDatabase) 
  {
    this.chatMensajes = db.list('/mensajes');

       
  }

  enviarMensaje(msj: Mensaje): any {
    return this.chatMensajes.push(msj);
  }

  getAll(): AngularFireList<Mensaje> {
    return this.chatMensajes;
  }
  

  

  
}
