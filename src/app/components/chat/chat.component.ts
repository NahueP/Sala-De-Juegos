import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ChatService } from'./../../services/chat.service';
import { Usuario } from './../../clases/usuario';
import { map } from 'rxjs/operators';
import { Mensaje } from 'src/app/clases/mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [AuthService]
})
export class ChatComponent implements OnInit {

  objMensaje : Mensaje = new Mensaje();
  user : Usuario = new Usuario();
  mensaje: string= '';
  listadoMensajes : any[];
  index = -1;
  isOwnMessage : boolean;
  ownEmail : string;
  mostrarChat:boolean = false;


  @ViewChild('scroller') private divMensaje!: ElementRef;
  items:Array<string>=[];

  constructor(private chatSvc : ChatService, private authSvc : AuthService) { }

  ngOnInit(): void {
    this.cargarMensajes();
    this.authSvc.getCurrentUser().subscribe(user=>{
      this.user.correo = user.email;
      this.user.nombre = user.displayName;
      this.ownEmail = this.user.correo;
      this.isOwnMessage = this.ownEmail === this.user.correo;
      
    });
  }

  scrollToBottom(): void {
    this.divMensaje.nativeElement.scrollTop
    = this.divMensaje.nativeElement.scrollHeight;
  }

  ngAfterViewChecked()
  {
    this.scrollToBottom();
  }

  cargarMensajes():void{
    this.chatSvc.getAll().snapshotChanges().pipe(
      map(changes=> changes.map(c=>({key:c.payload.key, ...c.payload.val()})))
    ).subscribe(data=> {
      this.listadoMensajes=data;
    });
  }


  enviarMensaje()
  {
    if(this.user)
    {
      if(this.mensaje != '')
      {
        this.objMensaje.mensaje = this.mensaje;
        this.objMensaje.userName = this.user.nombre;
        this.objMensaje.timeSent = this.user.getTimeStamp();
        this.chatSvc.enviarMensaje(this.objMensaje);
        console.log(this.listadoMensajes);
      }
    }
    else
    {
      console.log('Usuario offline');
    }
    this.mensaje='';

  }




}
